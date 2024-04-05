/* eslint-disable @typescript-eslint/no-explicit-any */
import '@geoblocks/cesium-view-cube'
import {CesiumTerrainProvider, Ion, SceneMode} from 'cesium'
import {useEffect} from 'react'
import {Viewer} from 'resium'
import {useZustand} from '../../store/useZustand'
import {ResiumWorld} from './ResiumWorld'


// eslint-disable-next-line max-len
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0YmZhMWZkYy01ZTZjLTQ2NWYtYTkyNi0yZTk5MjcwMzIwZjMiLCJpZCI6MTIwOTI3LCJpYXQiOjE2NzMzNjU5MDV9.t8oV9N6iImPQNUOQm-T-EE3VKyh65U6pGbv5_m0Kx80'


export const ResiumScene = ({
  terrainProvider,
  assetId,
}: {
  terrainProvider: CesiumTerrainProvider
  assetId: number
}) => {
  const {resiumViewer} = useZustand()

  useEffect(() => {
    const compass: any = document.querySelector('cesium-view-cube')

    if (compass && resiumViewer) {
      compass.scene = resiumViewer.scene
    }
  }, [resiumViewer])

  return (
    <>
      <Viewer
        full
        animation={false}
        baseLayerPicker={false}
        fullscreenButton={false}
        vrButton={false}
        geocoder={false}
        homeButton={false}
        infoBox={false}
        sceneModePicker={false}
        selectionIndicator={false}
        timeline={false}
        navigationHelpButton={false}
        navigationInstructionsInitiallyVisible={false}
        scene3DOnly={false}
        shouldAnimate={false}
        useDefaultRenderLoop={true}
        showRenderLoopErrors={false}
        useBrowserRecommendedResolution={false}
        automaticallyTrackDataSourceClocks={false}
        orderIndependentTranslucency={true}
        shadows={false}
        projectionPicker={false}
        blurActiveElementOnCanvasFocus={false}
        requestRenderMode={false}
        sceneMode={SceneMode.SCENE3D}
        terrainProvider={terrainProvider}
      >
        <ResiumWorld
          terrainProvider={terrainProvider}
          assetId={assetId}
        />
      </Viewer>
      <cesium-view-cube/>
    </>
  )
}
