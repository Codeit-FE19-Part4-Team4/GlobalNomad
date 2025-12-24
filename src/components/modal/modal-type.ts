export interface OpenModalParams<TProps = Record<string, unknown>> {
  type: string;
  props: TProps;
}

export interface ModalStateType<
  TProps = Record<string, unknown>,
> extends OpenModalParams<TProps> {
  id: number;
}
