/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * External dependencies
 */
import { _x } from '@web-stories-wp/i18n';
import PropTypes from 'prop-types';

const title = _x('Thermometer', 'sticker name', 'web-stories');

function ThermoStat({ style }) {
  return (
    <svg
      style={style}
      viewBox="0 0 28 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0943 45.6548C12.6419 49.0381 8.58462 50.5445 5.03213 49.0195C1.47964 47.4944 -0.222811 43.5155 1.22959 40.1322C2.14138 38.0082 4.07976 36.6239 6.27538 36.265C6.48111 36.2314 16.5651 12.468 20.4589 3.27544C21.2952 1.30095 23.5736 0.39225 25.5441 1.23812C27.5145 2.084 28.425 4.3617 27.5696 6.32801C23.5872 15.4825 13.3051 39.1608 13.4224 39.3331C14.6745 41.1721 15.0061 43.5309 14.0943 45.6548ZM5.82108 47.1817C8.44411 48.3077 11.2756 47.1507 12.2565 44.8659C12.8764 43.4218 12.6698 41.7814 11.7692 40.4587C11.492 40.0516 11.4447 39.6585 11.4319 39.5335C11.4147 39.365 11.4226 39.23 11.4283 39.161C11.4399 39.0199 11.4641 38.9093 11.474 38.8656C11.4969 38.7649 11.5239 38.679 11.5376 38.6366C11.5692 38.5384 11.6089 38.4295 11.6469 38.3288C11.7263 38.1185 11.8406 37.8314 11.981 37.4866C12.2639 36.7919 12.6758 35.8071 13.1814 34.6116C14.1938 32.2181 15.5947 28.951 17.1219 25.4073C20.177 18.3187 23.7442 10.1079 25.7357 5.53018C26.1463 4.58627 25.7131 3.48721 24.7551 3.07594C23.7971 2.66467 22.7019 3.10766 22.3005 4.05549C20.3534 8.65226 16.8579 16.8938 13.8231 23.9912C12.3059 27.5392 10.9023 30.8051 9.86435 33.1877C9.34595 34.3777 8.91563 35.3545 8.60691 36.0381C8.45366 36.3774 8.32424 36.6581 8.22646 36.8604C8.1796 36.9573 8.12806 37.0612 8.07865 37.1517C8.05727 37.1909 8.01365 37.2696 7.95635 37.3555C7.93151 37.3928 7.86799 37.4866 7.77368 37.5921C7.72761 37.6437 7.6352 37.7425 7.50119 37.8461C7.40174 37.9229 7.08417 38.1593 6.59804 38.2388C5.01884 38.497 3.68734 39.477 3.06741 40.9211C2.08656 43.2059 3.19805 46.0556 5.82108 47.1817Z"
        fill="white"
      />
      <path
        d="M20.6794 10.0327C20.4616 10.5402 20.6964 11.1282 21.2038 11.3461L23.0417 12.135L23.8306 10.2972L21.9928 9.50828C21.4853 9.29041 20.8973 9.52521 20.6794 10.0327Z"
        fill="white"
      />
      <path
        d="M19.2315 15.9406C18.724 15.7228 18.4892 15.1347 18.707 14.6272C18.9249 14.1197 19.5129 13.8849 20.0204 14.1028L21.8582 14.8918L21.0693 16.7296L19.2315 15.9406Z"
        fill="white"
      />
      <path
        d="M16.7347 19.2218C16.5168 19.7293 16.7516 20.3173 17.2591 20.5352L19.0969 21.3241L19.8859 19.4863L18.048 18.6973C17.5406 18.4795 16.9525 18.7143 16.7347 19.2218Z"
        fill="white"
      />
      <path
        d="M13.1844 27.4919C13.4023 26.9844 13.9903 26.7496 14.4978 26.9675C15.0053 27.1854 15.2401 27.7734 15.0222 28.2809L10.1205 39.6992C11.5306 40.7878 12.0842 42.7298 11.349 44.4425C10.4775 46.4725 8.12545 47.4117 6.09546 46.5402C4.06547 45.6688 3.12628 43.3167 3.99773 41.2867C4.73297 39.574 6.52216 38.6378 8.28264 38.9103L13.1844 27.4919Z"
        fill="white"
      />
    </svg>
  );
}

ThermoStat.propTypes = {
  style: PropTypes.object,
};

export default {
  aspectRatio: 28 / 50,
  svg: ThermoStat,
  title,
};
