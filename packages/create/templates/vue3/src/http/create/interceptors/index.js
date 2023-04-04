import requestData from './requestData';
import responseError from './responseError';

const interceptors = [requestData, responseError];

export function applyInterceptors(instance) {
  interceptors.forEach(interceptor => interceptor(instance));
}

export default interceptors
