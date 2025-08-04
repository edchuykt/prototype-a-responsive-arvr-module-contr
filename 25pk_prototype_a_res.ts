namespace ARVR_Module_Controller {
  export interface IModuleConfig {
    moduleName: string;
    moduleType: 'AR' | 'VR' | 'Hybrid';
    deviceType: 'Headset' | 'Mobile' | 'Desktop';
    resolution: number[];
    fps: number;
    environment: 'Indoor' | 'Outdoor';
  }

  export interface ISceneConfig {
    sceneName: string;
    sceneType: 'Interactive' | 'Passive';
    objects: IObjectConfig[];
  }

  export interface IObjectConfig {
    objectId: string;
    objectType: '3DModel' | 'Image' | 'Text';
    position: number[];
    rotation: number[];
    scale: number[];
    material: string;
  }

  export class ModuleController {
    private config: IModuleConfig;
    private sceneConfig: ISceneConfig;
    private device: any; // device API

    constructor(config: IModuleConfig, sceneConfig: ISceneConfig) {
      this.config = config;
      this.sceneConfig = sceneConfig;
      this.initDevice();
    }

    private initDevice() {
      // initialize device API based on deviceType
    }

    public startScene() {
      // start scene rendering based on sceneConfig
    }

    public updateObject(obj: IObjectConfig) {
      // update object properties
    }

    public stopScene() {
      // stop scene rendering
    }
  }
}