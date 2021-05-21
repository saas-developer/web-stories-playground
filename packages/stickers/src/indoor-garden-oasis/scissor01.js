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

const title = _x('Scissors', 'sticker name', 'web-stories');

function HomeGardenScissor01({ style }) {
  return (
    <svg
      style={style}
      viewBox="0 0 32 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="M16.1288 20.564C16.115 20.2228 16.2586 19.9256 16.3801 19.623C16.8384 18.4811 17.3023 17.342 17.7606 16.2028C19.7845 11.1868 21.8084 6.16809 23.8322 1.1521C23.9234 0.923723 24.0089 0.692596 24.1194 0.475227C24.3348 0.0542467 24.8235 -0.119098 25.2404 0.0955193C26.7369 0.865941 27.6315 2.0601 27.7999 3.75502C27.8883 4.66302 27.7751 5.55451 27.5569 6.43499C27.3526 7.25769 27.0931 8.06388 26.7866 8.85357C26.5685 9.41487 26.3476 9.97343 26.1074 10.5237C25.5662 11.7482 25.0858 12.9973 24.633 14.2575C23.0094 18.7535 21.3776 23.2467 19.7486 27.7427C19.7017 27.872 19.6547 27.9986 19.6078 28.1279C19.3344 28.9038 19.3234 28.9065 19.5443 29.7155C19.8011 30.6648 20.1048 31.6003 20.5024 32.5028C20.657 32.8522 20.8448 33.1879 21.0353 33.5181C21.3224 34.0133 21.7449 34.349 22.3026 34.4976C22.8051 34.6297 23.3132 34.7452 23.8184 34.8636C24.2188 34.9571 24.6192 35.0452 25.0223 35.125C26.1819 35.3533 27.1842 35.8926 28.0788 36.6438C30.1744 38.4075 31.4832 40.6335 31.8449 43.3492C32.0989 45.2615 31.5881 46.9812 30.1662 48.3652C29.4428 49.0696 28.5675 49.5016 27.5984 49.7657C26.6817 50.0134 25.7512 50.0436 24.8262 49.8868C22.3054 49.4548 20.287 48.1919 18.7877 46.1227C18.2217 45.344 17.8048 44.4828 17.4597 43.5886C17.1339 42.7466 16.8826 41.8799 16.6479 41.0104C16.5209 40.5372 16.4077 40.0584 16.2779 39.5824C16.2282 39.4008 16.1537 39.2247 16.0902 39.0403C15.9107 39.1532 15.8859 39.3182 15.8472 39.4723C15.7229 39.9759 15.607 40.4821 15.4855 40.9857C15.2977 41.7561 15.0796 42.5183 14.809 43.2639C14.2596 44.7745 13.4671 46.131 12.3075 47.2618C11.2914 48.2524 10.0959 48.954 8.77607 49.4576C7.84558 49.8125 6.8792 49.9913 5.88245 49.9996C5.30539 50.0051 4.73385 49.9556 4.17335 49.8042C2.93086 49.4741 1.94515 48.7807 1.20794 47.7351C0.440364 46.64 0.0924683 45.4266 0.0924683 44.1031C0.0924683 42.9062 0.374099 41.7698 0.879376 40.6968C1.93135 38.4543 3.52173 36.6906 5.69746 35.4771C6.91234 34.8003 8.22109 34.4288 9.61544 34.3848C9.72588 34.382 9.83356 34.3765 9.94401 34.3738C10.1842 34.371 10.3554 34.2555 10.4797 34.0519C10.8027 33.5098 11.0816 32.9485 11.3301 32.3707C11.6393 31.6415 11.9403 30.9069 12.2164 30.1667C12.3958 29.6825 12.5256 29.1789 12.6802 28.6699C12.4511 28.0288 12.2247 27.385 11.9927 26.7439C10.6757 23.1256 9.35037 19.5074 8.0361 15.8864C7.52254 14.4721 6.92614 13.0936 6.32423 11.7179C5.78582 10.4907 5.27502 9.25529 4.8719 7.97583C4.5102 6.82295 4.25066 5.65356 4.24237 4.44015C4.23961 3.86233 4.29759 3.29552 4.4743 2.74247C4.86362 1.5263 5.67813 0.678839 6.79085 0.0982708C7.21054 -0.12185 7.69925 0.0404892 7.91737 0.458718C8.03058 0.676087 8.12169 0.904462 8.21281 1.13284C9.70655 4.83086 11.2003 8.52889 12.694 12.2269C13.7074 14.7335 14.7234 17.2402 15.7423 19.7468C15.8555 20.0219 15.9162 20.3246 16.1482 20.5392C16.1454 20.7648 16.231 20.9685 16.3138 21.1693C16.9571 22.7652 17.606 24.3583 18.2549 25.9514C18.2852 26.0257 18.3294 26.0973 18.3846 26.1523C18.4095 26.1743 18.5089 26.1715 18.5227 26.1468C18.5917 26.0312 18.6525 25.9074 18.6994 25.7808C19.7983 22.7514 20.9 19.7248 21.9878 16.6899C22.1811 16.1478 22.3965 15.6195 22.6339 15.0967C23.2469 13.7568 23.8626 12.414 24.4093 11.0438C24.9588 9.67351 25.4475 8.284 25.7567 6.83671C25.9334 6.00576 26.0466 5.1693 25.9886 4.31633C25.9472 3.711 25.8257 3.12493 25.522 2.59114C25.4558 2.47557 25.3646 2.37652 25.2735 2.25545C25.1935 2.32974 25.1161 2.37377 25.083 2.43705C24.9974 2.60765 24.9312 2.78649 24.8594 2.96534C23.5837 6.13233 22.3081 9.29931 21.0325 12.4663C20.044 14.9234 19.0556 17.3805 18.0643 19.8376C17.9622 20.0907 17.8573 20.3439 17.733 20.586C17.6419 20.7593 17.4873 20.8694 17.294 20.9354C17.0151 21.0317 16.7501 21.0042 16.5043 20.8584C16.3718 20.7868 16.2558 20.6658 16.1288 20.564ZM13.5914 31.5728C13.4423 31.6718 13.423 31.8424 13.376 31.9882C13.1634 32.6679 12.8956 33.3255 12.5643 33.9556C12.3461 34.3655 12.1253 34.7755 11.863 35.158C11.4516 35.7578 10.8911 36.1155 10.1235 36.0274C9.76453 35.9862 9.41388 36.0219 9.06598 36.1155C8.74846 36.2008 8.42265 36.2531 8.10789 36.3466C5.6809 37.0895 3.84202 38.5341 2.75691 40.8563C2.15776 42.1385 1.84575 43.484 1.96724 44.9121C2.0059 45.3523 2.1053 45.7733 2.26268 46.1833C2.60781 47.0747 3.2401 47.6883 4.11536 48.0543C4.86085 48.3652 5.65329 48.4753 6.45124 48.401C7.38724 48.3157 8.27631 48.0433 9.10464 47.5893C10.8938 46.6097 12.1998 45.1762 13.0944 43.3602C13.2628 43.019 13.3843 42.6531 13.492 42.2871C13.6687 41.6845 13.7626 41.0627 13.8371 40.4381C13.9365 39.5989 14.0221 38.7542 14.3203 37.9507C14.6158 37.1583 14.9057 36.3631 15.2011 35.5679C15.2287 35.4909 15.2701 35.4194 15.3171 35.3506C15.4109 35.2102 15.5407 35.1084 15.7009 35.0562C16.2006 34.8883 16.6534 35.0919 16.8274 35.5789C16.993 36.0412 17.1449 36.5117 17.2747 36.985C17.6171 38.2231 17.9373 39.4641 18.2769 40.7023C18.5586 41.7313 18.8816 42.7466 19.3317 43.7152C19.6989 44.5131 20.1407 45.2643 20.7177 45.9329C21.408 46.7363 22.2419 47.3444 23.2276 47.7351C24.3375 48.1754 25.4944 48.3569 26.6872 48.2992C27.0461 48.2827 27.394 48.2111 27.7337 48.1011C28.6752 47.8011 29.3489 47.1958 29.7216 46.2796C29.8459 45.9769 29.9287 45.6577 29.9646 45.3303C30.0447 44.6452 30.0198 43.9628 29.8873 43.2887C29.5311 41.4507 28.7194 39.83 27.4769 38.4268C26.6154 37.4527 25.569 36.7951 24.2574 36.6135C24.0393 36.5832 23.8267 36.5227 23.6086 36.5035C22.9266 36.4429 22.2474 36.3549 21.5847 36.1733C21.3859 36.1182 21.2147 36.1733 21.038 36.2723C20.5355 36.553 20.2207 36.9877 19.9888 37.494C19.8977 37.6921 19.8287 37.9012 19.7238 38.0938C19.4835 38.5341 18.9175 38.6304 18.5254 38.3057C18.2714 38.0938 18.1775 37.8187 18.2466 37.4995C18.3653 36.9299 18.6221 36.4182 18.9672 35.9504C19.1633 35.6863 19.3924 35.4524 19.6382 35.2323C19.8508 35.0424 19.8535 34.9736 19.7431 34.7397C19.547 34.3188 19.3317 33.906 19.166 33.4713C18.9534 32.91 18.7795 32.3322 18.5945 31.7626C18.3266 30.9317 18.0726 30.0952 17.7965 29.2642C17.675 28.901 17.5177 28.5516 17.3713 28.1994C17.3409 28.1279 17.2857 28.0646 17.2195 27.9683C17.1366 28.2214 17.0869 28.4058 17.0179 28.5819C16.8826 28.9313 16.6286 29.1707 16.2834 29.311C16.1813 29.3523 16.0791 29.3853 15.977 29.4266C15.8417 29.4789 15.7091 29.4761 15.5794 29.4156C15.4054 29.3358 15.2232 29.267 15.0686 29.1569C14.7152 28.9093 14.497 28.5736 14.497 28.1251C14.4998 27.0878 15.5435 26.4439 16.4712 26.9475C16.5899 27.0108 16.7059 27.0768 16.8274 27.1346C16.8357 27.1401 16.8881 27.0961 16.8854 27.0851C16.8219 26.8787 16.7611 26.6696 16.681 26.4715C15.5076 23.5576 14.3314 20.6438 13.1524 17.7299C11.1644 12.8157 9.17642 7.90154 7.18845 2.9901C7.08629 2.73972 6.97032 2.49208 6.85712 2.23069C6.75772 2.26371 6.66384 2.26646 6.61414 2.31599C6.23587 2.69569 6.01223 3.15795 5.92663 3.68348C5.82447 4.31358 5.87969 4.93542 6.01775 5.55451C6.19722 6.35795 6.5037 7.11736 6.81018 7.87953C7.07524 8.53989 7.34307 9.1975 7.5888 9.86337C9.87498 16.0955 12.1529 22.3304 14.4335 28.5654C14.5081 28.769 14.5909 28.9753 14.6378 29.1872C14.7676 29.7788 15.0023 30.3318 15.1983 30.8986C15.306 31.2096 15.422 31.515 15.5324 31.8231C15.5683 31.925 15.607 32.0295 15.6208 32.1368C15.6512 32.3679 15.5821 32.5716 15.4027 32.7256C14.9913 33.0888 14.3093 32.9788 14.058 32.5028C13.9559 32.3102 13.8924 32.0983 13.8123 31.8974C13.7598 31.7819 13.7212 31.647 13.5914 31.5728Z"
        fill="#235524"
      />
      <path
        d="M23.3602 37.7933C24.3431 37.7933 25.2736 38.1702 26.124 38.7536C27.0876 39.4139 27.8276 40.2834 28.3688 41.3207C28.4185 41.417 28.4599 41.5188 28.5041 41.6179C28.7332 42.1214 28.3909 42.7322 27.7779 42.8368C27.5736 42.8726 27.3969 42.7818 27.2588 42.6414C27.1649 42.5451 27.0932 42.4241 27.0269 42.3085C26.8916 42.0719 26.7784 41.8215 26.6321 41.5931C25.9473 40.5448 24.9975 39.8459 23.7909 39.4965C22.9847 39.2653 22.1978 39.5763 21.7726 40.2201C21.5379 40.5751 21.455 40.9713 21.5047 41.3923C21.6483 42.6497 22.2364 43.665 23.2028 44.4657C23.628 44.8179 24.1057 45.0793 24.6358 45.2471C25.061 45.3819 25.489 45.4287 25.9307 45.3627C26.5547 45.2691 26.9855 44.9335 27.1926 44.3364C27.2561 44.1575 27.2864 43.9677 27.3417 43.7833C27.5073 43.2413 28.0595 42.9771 28.5814 43.189C28.7719 43.266 28.8906 43.4146 28.9348 43.6127C28.9569 43.7173 28.9679 43.8301 28.9597 43.9374C28.8354 45.3764 27.8387 46.5844 26.4554 46.9641C25.812 47.1402 25.1549 47.1484 24.5088 46.9503C22.5098 46.334 21.063 45.0985 20.2512 43.1615C19.9944 42.5506 19.8232 41.9123 19.8122 41.2574C19.7846 39.6753 20.7151 38.594 21.7808 38.1097C22.3027 37.8703 22.7058 37.785 23.3602 37.7933Z"
        fill="#235524"
      />
      <path
        d="M3.10763 43.4996C3.07173 42.7705 3.29814 42.0688 3.62395 41.4002C4.41362 39.7741 5.66162 38.646 7.3873 38.0654C7.59438 37.9966 7.80698 37.9361 8.01683 37.881C9.73698 37.4408 11.6587 38.4341 12.117 40.3629C12.2634 40.982 12.2385 41.6121 12.106 42.2339C11.9017 43.1914 11.4488 44.0252 10.8248 44.7708C10.2202 45.4917 9.49953 46.0723 8.66844 46.518C8.64359 46.5318 8.6215 46.5455 8.59665 46.5565C8.11623 46.7959 7.67445 46.6666 7.39834 46.2071C7.19679 45.8687 7.26305 45.4807 7.58058 45.2633C7.76005 45.1395 7.95884 45.0432 8.1466 44.9331C8.8203 44.5424 9.37252 44.0169 9.80601 43.373C10.1484 42.8668 10.3776 42.3137 10.499 41.7194C10.5487 41.4828 10.5543 41.2296 10.5405 40.9875C10.5046 40.3326 9.96891 39.6943 9.30073 39.5044C8.95283 39.4054 8.59389 39.4219 8.24324 39.5072C7.89258 39.5897 7.56677 39.7328 7.26857 39.9309C6.28839 40.5803 5.52633 41.4222 5.00173 42.4733C4.85539 42.7677 4.74771 43.0786 4.69525 43.4033C4.66764 43.5629 4.65383 43.7307 4.66764 43.8903C4.72286 44.5479 5.05419 45.0184 5.67543 45.2633C5.87975 45.3431 6.09235 45.3954 6.29667 45.4724C6.64181 45.6045 6.80471 45.8769 6.77434 46.2429C6.74397 46.6226 6.4789 46.9362 6.13929 47.0078C5.94602 47.0491 5.7555 47.0298 5.57051 46.9775C4.55719 46.6969 3.83379 46.0833 3.4003 45.1258C3.17113 44.6195 3.0883 44.0857 3.10763 43.4996Z"
        fill="#235524"
      />
    </svg>
  );
}

HomeGardenScissor01.propTypes = {
  style: PropTypes.object,
};

export default {
  aspectRatio: 32 / 50,
  svg: HomeGardenScissor01,
  title,
};
