import { useWindowSize } from "solidjs-use"
import { createEffect, createSignal, onMount } from "solid-js"
import * as THREE from "three"

const Window = typeof window !== "undefined" ? window : (undefined as never)

const getColor = () =>
  Number(
    Window?.getComputedStyle(document.documentElement)
      .getPropertyValue("--on-primary-container")
      .replace("#", "0x") ?? "0xFFFFFF"
  )

const material = new THREE.MeshBasicMaterial({
  color: getColor(),
})

const geometry = new THREE.SphereGeometry(0.25, 25, 24)

export function StarBackground() {
  const [canvasRef, setCanvasRef] = createSignal<HTMLCanvasElement>()
  const canvasSize = useWindowSize({
    includeScrollbar: false,
  })
  const [renderer, setRenderer] = createSignal<THREE.WebGLRenderer>()
  const [camera, setCamera] = createSignal<THREE.PerspectiveCamera>()
  const [scene, setScene] = createSignal<THREE.Scene>()

  function rerender() {
    const ren = renderer()
    const cam = camera()
    const sc = scene()
    if (!ren || !cam || !sc) return
    const width = canvasSize.width()
    const height = canvasSize.height()
    // ren.setPixelRatio(pixelRatio.pixelRatio())
    ren.setSize(width, height)
    cam.aspect = width / height
    cam.updateProjectionMatrix()
    ren.render(sc, cam)
  }

  onMount(() => {
    const mql = Window?.matchMedia("(prefers-color-scheme: dark)")

    const onChange = () => {
      material.color.set(getColor())
    }

    if (mql) {
      "addEventListener" in mql
        ? mql.addEventListener("change", onChange)
        : /** @ts-ignore */
          mql.addListener(onChange)
    }

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef(),
      alpha: true,
      antialias: true,
    })
    setRenderer(renderer)
    const camera = new THREE.PerspectiveCamera()
    setCamera(camera)
    const scene = new THREE.Scene()
    setScene(scene)

    function rotateCamera(time: number) {
      camera.rotation.y += 0.0001
      camera.rotation.z += 0.0001
      requestAnimationFrame(rotateCamera)
      rerender()
    }

    requestAnimationFrame(rotateCamera)

    for (let i = 0; i < 300; i++) {
      const [x, y, z] = Array(3)
        .fill(undefined)
        .map(() => THREE.MathUtils.randFloatSpread(400))

      const mesh = new THREE.Mesh(geometry, material)

      mesh.position.set(x, y, z)

      scene.add(mesh)
    }

    const light = new THREE.AmbientLight(0xffffff)
    scene.add(light)

    renderer.setClearColor(0xffffff, 0)

    renderer.render(scene, camera)
  })

  createEffect(rerender)

  return (
    <canvas
      class="fixed top-0 left-0 w-full h-screen -z-10 bg-transparent block"
      ref={setCanvasRef}
    />
  )
}
