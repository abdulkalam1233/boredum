interface BaseResponseType {
  status_code: string;
  status_type: string;
}

export interface ServiceErrorResponseType extends BaseResponseType {
  message: string;
}

export interface ServiceSuccessResponseType<T> extends BaseResponseType {
  data: T;
  message: string;
}
