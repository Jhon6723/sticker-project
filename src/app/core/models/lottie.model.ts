export interface LottieAnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets?: LottieAsset[];
  layers: LottieLayer[];
}

export interface LottieAsset {
  id: string;
  w?: number;
  h?: number;
  u?: string;
  p?: string;
  e?: number;
  nm?: string;
}

export interface LottieLayer {
  ddd?: number;
  ind?: number;
  ty?: number;
  nm?: string;
  refId?: string;
  sr?: number;
  ks?: LottieKeyframes;
  ao?: number;
  ip?: number;
  op?: number;
  st?: number;
  bm?: number;
  parent?: string;
  tt?: number;
  sx?: boolean;
}

export interface LottieKeyframes {
  a?: number;
  k?: number | number[] | LottieKeyframeData[];
  ix?: number;
}

export interface LottieKeyframeData {
  t: number;
  s?: number | number[];
  e?: number | number[];
}

export interface LottieRenderer {
  renderFrame(frameNum: number): void;
  destroy(): void;
  resize(width?: number, height?: number): void;
  setSpeed(speed: number): void;
  setDirection(direction: number): void;
  play(): void;
  pause(): void;
  stop(): void;
  goToAndStop(value: number, isFrame?: boolean): void;
  goToAndPlay(value: number, isFrame?: boolean): void;
}
