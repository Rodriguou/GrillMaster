import * as React from 'react'
import Svg, { Mask, Path } from 'react-native-svg'

export default function ManIcon(props) {
    return(
        <Svg width='38' height='50' viewBox='0 0 38 50' fill='none' {...props}>
            <Mask id='path-1-inside-1_547_122' fill='white'>
                <Path d='M36.8404 39.4792C35.7555 37.6861 34.0755 36.6073 32.4601 35.8872C30.8424 35.1678 29.2421 34.7801 28.2804 34.4287C27.5178 34.1545 26.6868 33.7261 26.094 33.2619C25.7971 33.0328 25.562 32.7949 25.4208 32.5877C25.2749 32.3797 25.2306 32.2181 25.2306 32.1097C25.2306 30.6929 25.8187 29.3672 26.6309 28.2063C27.2137 27.3733 27.7725 26.3488 28.1434 25.0831C28.2676 24.6592 28.5726 24.3195 28.9378 24.071C29.4381 23.7378 29.8612 23.2541 30.2197 22.5958C30.5818 21.9345 30.9011 21.0892 31.2423 19.9327C31.4143 19.3457 31.4954 18.8364 31.4954 18.3825C31.4954 17.8594 31.3842 17.4063 31.1798 17.0376C30.9047 16.5343 30.6973 15.932 30.9017 15.3961C32.8918 10.1766 30.9806 5.83003 30.0366 4.16103C29.7712 3.69168 29.7003 3.12371 29.9013 2.62337C30.3282 1.56099 29.5007 0.402052 28.3561 0.426387C26.3667 0.468679 23.4634 0.454942 20.7541 0.159998C7.06695 -1.32897 6.30207 7.95864 6.30207 12.0868C6.30207 14.2714 6.59987 15.6478 6.89717 16.4787C6.96447 16.6668 6.91757 16.8642 6.81973 17.0383C6.61617 17.4064 6.50492 17.8603 6.50492 18.3833C6.50643 18.8364 6.58531 19.3457 6.7589 19.9327C7.21573 21.4726 7.62748 22.4663 8.16097 23.1966C8.42847 23.5589 8.73127 23.8499 9.06182 24.071C9.42795 24.3184 9.73213 24.6589 9.85661 25.0829C10.2279 26.3476 10.7866 27.3719 11.3691 28.2047C12.1815 29.3661 12.7697 30.6924 12.7697 32.1097C12.7719 32.2021 12.7238 32.3716 12.5654 32.5906C12.3347 32.9186 11.8824 33.3093 11.3565 33.6395C10.8328 33.972 10.2362 34.2535 9.73511 34.4237C9.0837 34.6463 8.14826 34.8943 7.12415 35.2449C5.58611 35.7723 3.82274 36.5318 2.411 37.8964C0.99703 39.2552 -0.00832013 41.2475 5.18993e-05 43.9827C5.18993e-05 44.3305 0.0157874 44.6913 0.0488721 45.063C0.0699534 45.2965 0.153976 45.4893 0.255449 45.6537C0.451536 45.96 0.715205 46.1978 1.04666 46.4394C1.62745 46.8562 2.43359 47.2664 3.48171 47.6709C6.61486 48.8762 11.9157 49.9986 19.0007 50C24.7576 49.9993 29.3392 49.2566 32.534 48.3328C34.1313 47.8701 35.3792 47.3652 36.2757 46.8655C36.7256 46.6145 37.0878 46.3658 37.3741 46.0952C37.5168 45.9599 37.6416 45.8187 37.7445 45.6536C37.8474 45.4892 37.9316 45.2964 37.9527 45.0637C37.985 44.6912 38 44.3319 38 43.9856C38.0013 42.1634 37.564 40.6715 36.8404 39.4792ZM17.7276 48.4203C17.7269 48.4454 17.7061 48.4652 17.681 48.4651C17.663 48.465 17.6464 48.4544 17.6392 48.4379L15.1615 42.8085C15.158 42.8006 15.1674 42.7932 15.1743 42.7985C15.1778 42.8012 15.1829 42.8007 15.1858 42.7972L16.7417 40.914C17.0373 40.5562 17.6144 40.6882 17.7251 41.139L17.8204 41.527C17.8264 41.5516 17.8485 41.5689 17.8739 41.5689C17.9049 41.5689 17.9299 41.5946 17.9289 41.6257L17.7276 48.4203ZM16.7805 39.1036C15.8072 40.2816 13.9341 40.0218 13.3182 38.6233L12.2885 36.2851C12.0052 35.6417 12.2701 34.9052 12.8274 34.4767C13.1671 34.2126 13.6449 34.1702 13.9954 34.4197L16.3882 36.1228C17.3594 36.8142 17.5398 38.1845 16.7805 39.1036ZM14.9112 33.7059C14.4267 33.3612 14.33 32.7044 14.3325 32.1097C14.3325 31.3066 14.3325 30.9925 14.3325 29.6161C14.3325 29.4291 14.2598 29.2469 14.1325 29.1098C13.0664 27.9598 11.6231 26.4337 11.1218 23.7218C11.0726 23.4536 10.8825 23.2327 10.6246 23.144L10.6147 23.1406C10.3427 23.0468 10.1362 22.9501 9.9542 22.8286C9.6875 22.6461 9.44481 22.3965 9.16158 21.8859C8.88278 21.3781 8.58522 20.6187 8.26224 19.5167C8.1187 19.0358 8.06908 18.6612 8.06908 18.3834C8.06908 18.0597 8.13292 17.872 8.19839 17.752C8.29683 17.5788 8.41778 17.5047 8.5718 17.4451C8.61576 17.4286 8.66076 17.4165 8.70291 17.4076C8.80076 17.387 8.90173 17.3963 8.99969 17.4164L9.28013 17.4739C9.39367 17.4972 9.49219 17.5672 9.55165 17.6667C9.76748 18.0278 10.3321 17.8749 10.3384 17.4542C10.3704 15.2985 10.5038 11.5595 11.0399 11.1696C11.9874 10.4807 17.4376 12.5459 19.095 12.5459C20.7539 12.5459 26.0247 10.309 26.9601 10.9863C27.6759 11.5046 27.8398 15.0936 27.8681 17.4883C27.8733 17.9231 28.5034 18.0461 28.6646 17.6422C28.7184 17.5076 28.8424 17.4138 28.9866 17.3989L29.1173 17.3853C29.1811 17.3861 29.414 17.4123 29.5726 17.5133C29.6613 17.5694 29.7349 17.634 29.8018 17.7519C29.8664 17.8719 29.9303 18.0596 29.9303 18.3826C29.9317 18.6612 29.8806 19.0358 29.7387 19.5173C29.3074 20.9867 28.9213 21.8422 28.5658 22.3165C28.3885 22.5565 28.2262 22.7057 28.0451 22.8286C27.8648 22.9501 27.6567 23.0468 27.3847 23.1406L27.3746 23.1441C27.1168 23.2327 26.927 23.4536 26.8783 23.7218C26.3787 26.4337 24.9346 27.9598 23.8684 29.1098L23.8658 29.1127C23.7381 29.2492 23.6671 29.4292 23.6671 29.6161C23.6671 30.9925 23.6671 31.3066 23.6671 32.1097C23.6696 32.7078 23.5659 33.3672 23.0785 33.7139L21.2094 35.0434C19.887 35.984 18.1139 35.984 16.7914 35.0433L14.9112 33.7059ZM20.3568 48.446C20.3498 48.4617 20.3348 48.4723 20.3177 48.4729C20.293 48.4739 20.2727 48.4541 20.272 48.4294L20.07 41.6279C20.069 41.5957 20.0949 41.569 20.1271 41.569C20.1534 41.569 20.1763 41.5511 20.1826 41.5255L20.2772 41.1391C20.3877 40.6885 20.9646 40.5564 21.2601 40.9141L22.8153 42.7965C22.8181 42.8 22.8232 42.8006 22.8269 42.7979C22.8339 42.7927 22.8432 42.8002 22.8397 42.8081L20.3568 48.446ZM24.681 38.6239C24.0653 40.0221 22.1926 40.2819 21.2195 39.1041C20.4603 38.1852 20.6407 36.8151 21.6118 36.1239L23.4498 34.8159C24.1188 34.3398 25.0297 34.4265 25.7221 34.868C25.9916 35.0384 26.1164 35.3646 25.9878 35.6564L24.681 38.6239Z' />
            </Mask>

            <Path d='M36.8404 39.4792C35.7555 37.6861 34.0755 36.6073 32.4601 35.8872C30.8424 35.1678 29.2421 34.7801 28.2804 34.4287C27.5178 34.1545 26.6868 33.7261 26.094 33.2619C25.7971 33.0328 25.562 32.7949 25.4208 32.5877C25.2749 32.3797 25.2306 32.2181 25.2306 32.1097C25.2306 30.6929 25.8187 29.3672 26.6309 28.2063C27.2137 27.3733 27.7725 26.3488 28.1434 25.0831C28.2676 24.6592 28.5726 24.3195 28.9378 24.071C29.4381 23.7378 29.8612 23.2541 30.2197 22.5958C30.5818 21.9345 30.9011 21.0892 31.2423 19.9327C31.4143 19.3457 31.4954 18.8364 31.4954 18.3825C31.4954 17.8594 31.3842 17.4063 31.1798 17.0376C30.9047 16.5343 30.6973 15.932 30.9017 15.3961C32.8918 10.1766 30.9806 5.83003 30.0366 4.16103C29.7712 3.69168 29.7003 3.12371 29.9013 2.62337C30.3282 1.56099 29.5007 0.402052 28.3561 0.426387C26.3667 0.468679 23.4634 0.454942 20.7541 0.159998C7.06695 -1.32897 6.30207 7.95864 6.30207 12.0868C6.30207 14.2714 6.59987 15.6478 6.89717 16.4787C6.96447 16.6668 6.91757 16.8642 6.81973 17.0383C6.61617 17.4064 6.50492 17.8603 6.50492 18.3833C6.50643 18.8364 6.58531 19.3457 6.7589 19.9327C7.21573 21.4726 7.62748 22.4663 8.16097 23.1966C8.42847 23.5589 8.73127 23.8499 9.06182 24.071C9.42795 24.3184 9.73213 24.6589 9.85661 25.0829C10.2279 26.3476 10.7866 27.3719 11.3691 28.2047C12.1815 29.3661 12.7697 30.6924 12.7697 32.1097C12.7719 32.2021 12.7238 32.3716 12.5654 32.5906C12.3347 32.9186 11.8824 33.3093 11.3565 33.6395C10.8328 33.972 10.2362 34.2535 9.73511 34.4237C9.0837 34.6463 8.14826 34.8943 7.12415 35.2449C5.58611 35.7723 3.82274 36.5318 2.411 37.8964C0.99703 39.2552 -0.00832013 41.2475 5.18993e-05 43.9827C5.18993e-05 44.3305 0.0157874 44.6913 0.0488721 45.063C0.0699534 45.2965 0.153976 45.4893 0.255449 45.6537C0.451536 45.96 0.715205 46.1978 1.04666 46.4394C1.62745 46.8562 2.43359 47.2664 3.48171 47.6709C6.61486 48.8762 11.9157 49.9986 19.0007 50C24.7576 49.9993 29.3392 49.2566 32.534 48.3328C34.1313 47.8701 35.3792 47.3652 36.2757 46.8655C36.7256 46.6145 37.0878 46.3658 37.3741 46.0952C37.5168 45.9599 37.6416 45.8187 37.7445 45.6536C37.8474 45.4892 37.9316 45.2964 37.9527 45.0637C37.985 44.6912 38 44.3319 38 43.9856C38.0013 42.1634 37.564 40.6715 36.8404 39.4792ZM17.7276 48.4203C17.7269 48.4454 17.7061 48.4652 17.681 48.4651C17.663 48.465 17.6464 48.4544 17.6392 48.4379L15.1615 42.8085C15.158 42.8006 15.1674 42.7932 15.1743 42.7985C15.1778 42.8012 15.1829 42.8007 15.1858 42.7972L16.7417 40.914C17.0373 40.5562 17.6144 40.6882 17.7251 41.139L17.8204 41.527C17.8264 41.5516 17.8485 41.5689 17.8739 41.5689C17.9049 41.5689 17.9299 41.5946 17.9289 41.6257L17.7276 48.4203ZM16.7805 39.1036C15.8072 40.2816 13.9341 40.0218 13.3182 38.6233L12.2885 36.2851C12.0052 35.6417 12.2701 34.9052 12.8274 34.4767C13.1671 34.2126 13.6449 34.1702 13.9954 34.4197L16.3882 36.1228C17.3594 36.8142 17.5398 38.1845 16.7805 39.1036ZM14.9112 33.7059C14.4267 33.3612 14.33 32.7044 14.3325 32.1097C14.3325 31.3066 14.3325 30.9925 14.3325 29.6161C14.3325 29.4291 14.2598 29.2469 14.1325 29.1098C13.0664 27.9598 11.6231 26.4337 11.1218 23.7218C11.0726 23.4536 10.8825 23.2327 10.6246 23.144L10.6147 23.1406C10.3427 23.0468 10.1362 22.9501 9.9542 22.8286C9.6875 22.6461 9.44481 22.3965 9.16158 21.8859C8.88278 21.3781 8.58522 20.6187 8.26224 19.5167C8.1187 19.0358 8.06908 18.6612 8.06908 18.3834C8.06908 18.0597 8.13292 17.872 8.19839 17.752C8.29683 17.5788 8.41778 17.5047 8.5718 17.4451C8.61576 17.4286 8.66076 17.4165 8.70291 17.4076C8.80076 17.387 8.90173 17.3963 8.99969 17.4164L9.28013 17.4739C9.39367 17.4972 9.49219 17.5672 9.55165 17.6667C9.76748 18.0278 10.3321 17.8749 10.3384 17.4542C10.3704 15.2985 10.5038 11.5595 11.0399 11.1696C11.9874 10.4807 17.4376 12.5459 19.095 12.5459C20.7539 12.5459 26.0247 10.309 26.9601 10.9863C27.6759 11.5046 27.8398 15.0936 27.8681 17.4883C27.8733 17.9231 28.5034 18.0461 28.6646 17.6422C28.7184 17.5076 28.8424 17.4138 28.9866 17.3989L29.1173 17.3853C29.1811 17.3861 29.414 17.4123 29.5726 17.5133C29.6613 17.5694 29.7349 17.634 29.8018 17.7519C29.8664 17.8719 29.9303 18.0596 29.9303 18.3826C29.9317 18.6612 29.8806 19.0358 29.7387 19.5173C29.3074 20.9867 28.9213 21.8422 28.5658 22.3165C28.3885 22.5565 28.2262 22.7057 28.0451 22.8286C27.8648 22.9501 27.6567 23.0468 27.3847 23.1406L27.3746 23.1441C27.1168 23.2327 26.927 23.4536 26.8783 23.7218C26.3787 26.4337 24.9346 27.9598 23.8684 29.1098L23.8658 29.1127C23.7381 29.2492 23.6671 29.4292 23.6671 29.6161C23.6671 30.9925 23.6671 31.3066 23.6671 32.1097C23.6696 32.7078 23.5659 33.3672 23.0785 33.7139L21.2094 35.0434C19.887 35.984 18.1139 35.984 16.7914 35.0433L14.9112 33.7059ZM20.3568 48.446C20.3498 48.4617 20.3348 48.4723 20.3177 48.4729C20.293 48.4739 20.2727 48.4541 20.272 48.4294L20.07 41.6279C20.069 41.5957 20.0949 41.569 20.1271 41.569C20.1534 41.569 20.1763 41.5511 20.1826 41.5255L20.2772 41.1391C20.3877 40.6885 20.9646 40.5564 21.2601 40.9141L22.8153 42.7965C22.8181 42.8 22.8232 42.8006 22.8269 42.7979C22.8339 42.7927 22.8432 42.8002 22.8397 42.8081L20.3568 48.446ZM24.681 38.6239C24.0653 40.0221 22.1926 40.2819 21.2195 39.1041C20.4603 38.1852 20.6407 36.8151 21.6118 36.1239L23.4498 34.8159C24.1188 34.3398 25.0297 34.4265 25.7221 34.868C25.9916 35.0384 26.1164 35.3646 25.9878 35.6564L24.681 38.6239Z' fill='black' stroke='black' stroke-width='2' mask='url(#path-1-inside-1_547_122)' />
        </Svg>
    )
}