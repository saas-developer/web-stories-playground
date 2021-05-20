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

const title = _x('Bread', 'sticker name', 'web-stories');

function BreadBun({ style }) {
  return (
    <svg
      style={style}
      viewBox="0 0 93 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.4525 11.3725C38.0326 12.0523 37.9542 13.0756 37.2774 13.6582C36.5334 14.2986 34.9513 16.6873 37.073 20.2386C40.1165 25.3328 37.9667 29.4281 36.1996 30.9487C35.5226 31.5312 34.5037 31.4523 33.9237 30.7724C33.3437 30.0926 33.4223 29.0693 34.0993 28.4868C34.8439 27.8461 36.4264 25.4575 34.305 21.9066C31.2617 16.8128 33.4099 12.7176 35.1766 11.1967C35.8534 10.6141 36.8723 10.6928 37.4525 11.3725Z"
        fill="#2D2A35"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.4408 0.566085C52.0209 1.2458 51.9425 2.26912 51.2657 2.85173C50.5217 3.49218 48.9396 5.88086 51.0613 9.43218C54.1048 14.5264 51.955 18.6217 50.1879 20.1423C49.5109 20.7247 48.492 20.6458 47.912 19.966C47.3321 19.2861 47.4106 18.2628 48.0876 17.6804C48.8322 17.0397 50.4147 14.6511 48.2933 11.1001C45.25 6.0063 47.3982 1.9111 49.1649 0.390267C49.8417 -0.192345 50.8607 -0.113628 51.4408 0.566085Z"
        fill="#2D2A35"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.8687 37.124C39.0358 36.8469 42.1771 36.7419 45.155 36.7419C49.8483 36.7419 54.9548 37.0027 59.9323 37.7897C71.1426 39.5623 82.345 44.1237 85.9627 55.1458C87.1182 58.6663 85.7216 61.6568 84.2545 63.5998C84.2142 63.6532 84.1737 63.7059 84.1331 63.7581H90.886C91.7774 63.7581 92.5 64.4838 92.5 65.379C92.5 66.2743 91.7774 67 90.886 67H2.11404C1.22263 67 0.5 66.2743 0.5 65.379C0.5 64.4838 1.22263 63.7581 2.11404 63.7581H6.1768C6.13619 63.7059 6.09571 63.6532 6.0554 63.5998C4.58836 61.6568 3.19169 58.6663 4.34722 55.1458C6.44407 48.7573 11.1185 44.5209 16.8281 41.7648C22.5023 39.0259 29.2864 37.6998 35.8687 37.124ZM10.7148 63.7581H79.5951C79.7112 63.6666 79.8498 63.5535 80.004 63.4202C80.4921 62.998 81.1164 62.3905 81.6823 61.6409C82.8278 60.1239 83.5832 58.2514 82.8969 56.1607C80.3089 48.2757 72.9308 44.0117 63.9083 41.8692L70.5934 49.7382C71.1719 50.4193 71.0912 51.4424 70.4131 52.0235C69.735 52.6045 68.7162 52.5235 68.1376 51.8424L58.8433 40.902C54.2646 40.2187 49.5512 39.9839 45.155 39.9839C43.3227 39.9839 41.4341 40.0247 39.5222 40.1219L48.4822 49.6792C49.0932 50.331 49.0624 51.3568 48.4134 51.9705C47.7644 52.5842 46.7429 52.5533 46.1319 51.9015L35.3728 40.4251C30.0655 40.9385 24.821 41.9594 20.2843 43.7804L25.8786 49.6716C26.4938 50.3195 26.4695 51.3455 25.8244 51.9634C25.1794 52.5812 24.1577 52.5569 23.5425 51.909L17.1855 45.2145C12.5437 47.6849 9.0422 51.1971 7.41302 56.1607C6.72678 58.2514 7.48215 60.1239 8.6276 61.6409C9.19353 62.3905 9.81783 62.998 10.3059 63.4202C10.4601 63.5535 10.5987 63.6666 10.7148 63.7581Z"
        fill="#2D2A35"
      />
    </svg>
  );
}

BreadBun.propTypes = {
  style: PropTypes.object,
};

export default {
  aspectRatio: 93 / 67,
  svg: BreadBun,
  title,
};
