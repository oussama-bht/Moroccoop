
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { FaFacebookF, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className="row p-5 bg-light text-dark">
        <div class="row col-md-9">
            <div class="col-md-4">
                <h1 className="fs-2 fw-bold text-dark fheader my-3">Moroccoop</h1>
                
                <p className="fs-6 text-dark text-decoration-none fw-light ">
                    Mastering Marketing
                </p>
            </div>
            <div class="col-md-4">
                <h1 className="fs-2 fw-bold text-dark fheader my-3"></h1>
                <p><a href="#" className="fs-6 text-dark text-decoration-none fw-light ">
                    Product Management
                </a></p>
                <p><a href="#" className="fs-6 text-dark text-decoration-none fw-light ">
                    Mastering Marketing
                </a></p>
            </div>
            <div class="col-md-4">
                <h1 className="fs-2 fw-bold text-dark fheader my-3">Explore</h1>
                <p><a href="#" className="fs-6 text-dark text-decoration-none fw-light ">
                    Privacy Policy
                </a></p>
                <p><a href="#" className="fs-6 text-dark text-decoration-none fw-light ">
                    Terms & Conditions
                </a></p>
                <p><a href="#" className="fs-6  text-dark text-decoration-none ">
                    moroccoop@example.ma
                </a></p>
            </div>
            <div class="col-md-6 my-3">
                <h1 class="fs-2 fw-bold text-dark fheader mb-3">Our Apps</h1>
                <div class="pt-5 m-auto">
                    <img width="120" height="38" className='mr-3' src='assets/img/google-play-badge.png'/>
                    <svg width="120" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_27_66)">
                        <path d="M110.135 -0.000121746H9.53468C9.16798 -0.000121746 8.80568 -0.000121746 8.43995 0.00176125C8.1338 0.00364425 7.83009 0.00911437 7.521 0.0137183C6.84951 0.0211579 6.17961 0.0767765 5.5171 0.180091C4.85552 0.285654 4.21467 0.484671 3.61622 0.770411C3.0185 1.05857 2.47235 1.433 1.99757 1.88012C1.5203 2.32598 1.12246 2.84134 0.81935 3.40638C0.5154 3.97029 0.304641 4.57457 0.19435 5.19835C0.0830109 5.82135 0.0230984 6.45153 0.01515 7.08323C0.00587 7.3719 0.00489 7.66152 0 7.95022V29.7123C0.00489 30.0046 0.00587 30.2878 0.01515 30.5803C0.0231008 31.2119 0.0830134 31.8421 0.19435 32.4651C0.304336 33.0892 0.515108 33.6938 0.81935 34.258C1.12233 34.8212 1.52022 35.3344 1.99757 35.7778C2.47054 36.2269 3.01705 36.6016 3.61622 36.8876C4.21467 37.1741 4.85545 37.3743 5.5171 37.4815C6.17972 37.584 6.84956 37.6396 7.521 37.6479C7.83009 37.6543 8.1338 37.658 8.43995 37.658C8.80567 37.6599 9.168 37.6599 9.53468 37.6599H110.135C110.494 37.6599 110.859 37.6599 111.219 37.658C111.523 37.658 111.836 37.6543 112.141 37.6479C112.811 37.64 113.479 37.5844 114.141 37.4815C114.804 37.3735 115.448 37.1734 116.049 36.8876C116.647 36.6014 117.193 36.2268 117.666 35.7778C118.142 35.3327 118.541 34.8198 118.848 34.258C119.15 33.6934 119.358 33.0888 119.467 32.4651C119.578 31.842 119.64 31.212 119.652 30.5803C119.656 30.2878 119.656 30.0046 119.656 29.7123C119.664 29.3703 119.664 29.0301 119.664 28.6825V8.97814C119.664 8.63336 119.664 8.29133 119.656 7.95022C119.656 7.66152 119.656 7.3719 119.652 7.0832C119.64 6.45143 119.578 5.82139 119.467 5.19831C119.358 4.57489 119.149 3.97066 118.848 3.40634C118.23 2.27379 117.252 1.3519 116.049 0.770327C115.448 0.485285 114.804 0.286321 114.141 0.180006C113.48 0.0762365 112.811 0.0205986 112.141 0.0135865C111.836 0.00899197 111.523 0.00347478 111.219 0.00163886C110.859 -0.000244141 110.494 -0.000244141 110.135 -0.000244141V-0.000121746Z" fill="#A6A6A6"/>
                        <path d="M8.44484 36.8361C8.14016 36.8361 7.84284 36.8324 7.54055 36.826C6.91433 36.8184 6.28957 36.767 5.67141 36.6725C5.095 36.579 4.53661 36.4052 4.01467 36.1566C3.49751 35.9102 3.02582 35.587 2.61767 35.1995C2.20361 34.8166 1.85888 34.3724 1.59716 33.8847C1.33255 33.3938 1.14942 32.8676 1.05416 32.3244C0.951281 31.7408 0.895621 31.1507 0.887656 30.5591C0.881316 30.3606 0.873016 29.6994 0.873016 29.6994V7.95026C0.873016 7.95026 0.881856 7.2993 0.887706 7.10806C0.895332 6.51744 0.950669 5.92822 1.05324 5.3455C1.14868 4.80086 1.33194 4.27315 1.5967 3.78063C1.85746 3.29323 2.20027 2.84877 2.61184 2.46446C3.02294 2.07651 3.49614 1.75168 4.01418 1.50181C4.53492 1.25408 5.09225 1.08145 5.6675 0.989689C6.28769 0.894189 6.91462 0.842557 7.54301 0.835226L8.44533 0.82373H111.214L112.127 0.835688C112.75 0.842654 113.371 0.893825 113.985 0.988766C114.566 1.08168 115.13 1.25552 115.656 1.50457C116.694 2.00812 117.539 2.8048 118.071 3.78293C118.332 4.27205 118.512 4.79545 118.606 5.33539C118.71 5.92289 118.768 6.51674 118.78 7.1122C118.783 7.37883 118.783 7.66523 118.783 7.95026C118.791 8.30333 118.791 8.63938 118.791 8.97818V28.6825C118.791 29.0246 118.791 29.3583 118.783 29.6948C118.783 30.001 118.783 30.2815 118.779 30.5701C118.768 31.155 118.71 31.7382 118.608 32.3152C118.515 32.8623 118.333 33.3926 118.068 33.8875C117.805 34.37 117.462 34.8102 117.053 35.1922C116.644 35.5817 116.172 35.9068 115.653 36.1548C115.128 36.4053 114.566 36.5798 113.985 36.6725C113.367 36.7675 112.742 36.8189 112.116 36.826C111.823 36.8324 111.517 36.8361 111.219 36.8361L110.135 36.838L8.44484 36.8361Z" fill="black"/>
                        <path d="M24.7689 19.113C24.7796 18.3272 25.0013 17.5567 25.4134 16.8732C25.8254 16.1897 26.4143 15.6155 27.1254 15.2039C26.6737 14.5964 26.0777 14.0966 25.3849 13.7439C24.6921 13.3913 23.9215 13.1956 23.1343 13.1724C21.455 13.0065 19.8271 14.1184 18.9714 14.1184C18.0991 14.1184 16.7816 13.1889 15.3629 13.2164C14.4452 13.2443 13.5509 13.4955 12.767 13.9456C11.9831 14.3957 11.3364 15.0293 10.89 15.7846C8.95595 18.9372 10.3985 23.5704 12.2511 26.1186C13.178 27.3664 14.2613 28.7603 15.6788 28.7109C17.0658 28.6567 17.5839 27.8781 19.2582 27.8781C20.9169 27.8781 21.403 28.7109 22.8492 28.6794C24.3376 28.6567 25.2753 27.4261 26.1697 26.1664C26.8357 25.2773 27.3481 24.2947 27.6881 23.2548C26.8234 22.9105 26.0855 22.3341 25.5664 21.5976C25.0472 20.8611 24.7699 19.997 24.7689 19.113V19.113Z" fill="white"/>
                        <path d="M22.0372 11.4964C22.8488 10.5792 23.2486 9.40024 23.1518 8.20996C21.9119 8.33256 20.7667 8.89046 19.9442 9.77248C19.542 10.2034 19.234 10.7047 19.0378 11.2477C18.8415 11.7907 18.7609 12.3648 18.8005 12.9372C19.4206 12.9432 20.0341 12.8167 20.5948 12.5671C21.1554 12.3175 21.6486 11.9514 22.0372 11.4964Z" fill="white"/>
                        <path d="M42.3023 25.552H37.5689L36.4321 28.7121H34.4273L38.9107 17.0205H40.9937L45.4771 28.7121H43.438L42.3023 25.552ZM38.0591 24.0937H41.8111L39.9615 18.9651H39.9097L38.0591 24.0937Z" fill="white"/>
                        <path d="M55.1597 24.4504C55.1597 27.0993 53.6538 28.8012 51.3814 28.8012C50.8057 28.8295 50.2332 28.7047 49.7294 28.4409C49.2256 28.1772 48.8109 27.7852 48.5327 27.3098H48.4897V31.5319H46.6313V20.1879H48.4302V21.6057H48.4644C48.7553 21.1326 49.1771 20.7427 49.6847 20.4773C50.1923 20.2119 50.7669 20.0811 51.3472 20.0987C53.645 20.0987 55.1597 21.8089 55.1597 24.4504ZM53.2495 24.4504C53.2495 22.7247 52.3023 21.5901 50.8569 21.5901C49.437 21.5901 48.4819 22.7486 48.4819 24.4504C48.4819 26.1679 49.437 27.3181 50.8569 27.3181C52.3023 27.3181 53.2495 26.1918 53.2495 24.4504Z" fill="white"/>
                        <path d="M65.1245 24.4504C65.1245 27.0993 63.6187 28.8012 61.3462 28.8012C60.7706 28.8295 60.1981 28.7047 59.6943 28.4409C59.1905 28.1772 58.7757 27.7852 58.4976 27.3098H58.4546V31.5319H56.5962V20.1879H58.395V21.6057H58.4292C58.7201 21.1326 59.1419 20.7427 59.6495 20.4773C60.1571 20.2119 60.7317 20.0811 61.312 20.0987C63.6099 20.0987 65.1245 21.8089 65.1245 24.4504ZM63.2144 24.4504C63.2144 22.7246 62.2671 21.5901 60.8218 21.5901C59.4019 21.5901 58.4468 22.7485 58.4468 24.4504C58.4468 26.1679 59.4019 27.3181 60.8218 27.3181C62.2671 27.3181 63.2144 26.1918 63.2144 24.4504H63.2144Z" fill="white"/>
                        <path d="M71.7105 25.4544C71.8482 26.6138 73.0445 27.375 74.6792 27.375C76.2456 27.375 77.3726 26.6137 77.3726 25.5683C77.3726 24.6609 76.6929 24.1175 75.0835 23.7451L73.4741 23.3801C71.1939 22.8615 70.1353 21.8575 70.1353 20.2283C70.1353 18.211 72.0025 16.8254 74.6538 16.8254C77.2778 16.8254 79.0767 18.211 79.1372 20.2283H77.2612C77.1489 19.0615 76.1245 18.3572 74.6274 18.3572C73.1304 18.3572 72.1059 19.0698 72.1059 20.1069C72.1059 20.9335 72.7603 21.4199 74.3608 21.7922L75.729 22.1085C78.2768 22.6758 79.3354 23.6394 79.3354 25.3495C79.3354 27.5368 77.4848 28.9068 74.5415 28.9068C71.7876 28.9068 69.9282 27.569 69.8081 25.4543L71.7105 25.4544Z" fill="white"/>
                        <path d="M83.3462 18.1707V20.1879H85.0679V21.5735H83.3462V26.2727C83.3462 27.0027 83.6909 27.3429 84.4478 27.3429C84.6522 27.3396 84.8562 27.3261 85.0591 27.3024V28.6798C84.7188 28.7396 84.373 28.7667 84.0269 28.7607C82.1939 28.7607 81.479 28.1125 81.479 26.4593V21.5735H80.1626V20.1879H81.479V18.1707H83.3462Z" fill="white"/>
                        <path d="M86.065 24.4503C86.065 21.7683 87.7427 20.083 90.3589 20.083C92.9839 20.083 94.6539 21.7683 94.6539 24.4503C94.6539 27.1397 92.9927 28.8176 90.3589 28.8176C87.7261 28.8176 86.065 27.1397 86.065 24.4503ZM92.7603 24.4503C92.7603 22.6105 91.8648 21.5247 90.3589 21.5247C88.8531 21.5247 87.9585 22.6188 87.9585 24.4503C87.9585 26.2975 88.8531 27.375 90.3589 27.375C91.8648 27.375 92.7603 26.2975 92.7603 24.4503H92.7603Z" fill="white"/>
                        <path d="M96.186 20.1878H97.9585V21.6387H98.0015C98.1214 21.1856 98.4034 20.7851 98.8 20.5047C99.1966 20.2242 99.6836 20.0808 100.179 20.0986C100.393 20.0979 100.607 20.1198 100.816 20.1639V21.8005C100.546 21.7227 100.264 21.687 99.981 21.6948C99.711 21.6845 99.4418 21.7293 99.192 21.8262C98.9421 21.923 98.7175 22.0697 98.5335 22.256C98.3496 22.4423 98.2106 22.6639 98.1262 22.9055C98.0417 23.1472 98.0139 23.4032 98.0444 23.6559V28.7119H96.186L96.186 20.1878Z" fill="white"/>
                        <path d="M109.384 26.2083C109.134 27.7557 107.534 28.8176 105.486 28.8176C102.852 28.8176 101.217 27.1562 101.217 24.4908C101.217 21.8171 102.861 20.083 105.408 20.083C107.913 20.083 109.488 21.703 109.488 24.2876V24.887H103.093V24.9928C103.064 25.3065 103.105 25.6225 103.216 25.9199C103.326 26.2172 103.502 26.4891 103.732 26.7175C103.963 26.9459 104.242 27.1255 104.552 27.2444C104.861 27.3633 105.195 27.4188 105.529 27.4072C105.968 27.446 106.409 27.3502 106.785 27.1342C107.162 26.9182 107.455 26.5934 107.62 26.2083L109.384 26.2083ZM103.102 23.6642H107.628C107.645 23.3821 107.6 23.0999 107.495 22.8351C107.39 22.5703 107.229 22.3288 107.02 22.1257C106.812 21.9225 106.561 21.7622 106.283 21.6546C106.006 21.5471 105.708 21.4947 105.408 21.5008C105.105 21.4991 104.805 21.5538 104.525 21.6618C104.245 21.7699 103.99 21.9291 103.776 22.1302C103.562 22.3313 103.392 22.5704 103.276 22.8337C103.16 23.097 103.101 23.3793 103.102 23.6642V23.6642Z" fill="white"/>
                        <path d="M37.8262 8.22024C38.2158 8.19392 38.6068 8.24934 38.9709 8.38249C39.335 8.51565 39.6632 8.72324 39.9318 8.99027C40.2004 9.2573 40.4026 9.57713 40.524 9.92668C40.6455 10.2762 40.6829 10.6468 40.6338 11.0116C40.6338 12.8064 39.6035 13.838 37.8262 13.838H35.6709V8.22024H37.8262ZM36.5977 13.0435H37.7227C38.0011 13.0592 38.2797 13.0162 38.5382 12.9177C38.7968 12.8192 39.0287 12.6677 39.2172 12.4742C39.4057 12.2806 39.546 12.05 39.6279 11.7989C39.7097 11.5479 39.7311 11.2829 39.6904 11.0231C39.7282 10.7643 39.7046 10.5009 39.6215 10.2517C39.5384 10.0026 39.3977 9.77378 39.2097 9.58178C39.0216 9.38978 38.7908 9.23932 38.5337 9.14118C38.2766 9.04304 37.9997 8.99965 37.7227 9.01412H36.5977V13.0435Z" fill="white"/>
                        <path d="M41.6807 11.7163C41.6524 11.4377 41.6862 11.1566 41.7801 10.891C41.8739 10.6255 42.0257 10.3813 42.2256 10.1742C42.4255 9.96706 42.6693 9.80158 42.9411 9.68834C43.213 9.5751 43.507 9.5166 43.8042 9.5166C44.1015 9.5166 44.3955 9.5751 44.6673 9.68834C44.9392 9.80158 45.1829 9.96706 45.3828 10.1742C45.5828 10.3813 45.7345 10.6255 45.8284 10.891C45.9222 11.1566 45.9561 11.4377 45.9278 11.7163C45.9566 11.9952 45.9232 12.2767 45.8296 12.5427C45.736 12.8087 45.5843 13.0533 45.3843 13.2608C45.1843 13.4683 44.9404 13.6342 44.6683 13.7477C44.3962 13.8611 44.1018 13.9198 43.8042 13.9198C43.5066 13.9198 43.2123 13.8611 42.9401 13.7477C42.668 13.6342 42.4241 13.4683 42.2241 13.2608C42.0241 13.0533 41.8725 12.8087 41.7789 12.5427C41.6853 12.2767 41.6518 11.9952 41.6807 11.7163V11.7163ZM45.0137 11.7163C45.0137 10.7973 44.5752 10.2599 43.8057 10.2599C43.0332 10.2599 42.5987 10.7973 42.5987 11.7163C42.5987 12.6426 43.0333 13.1759 43.8057 13.1759C44.5752 13.1759 45.0137 12.639 45.0137 11.7163H45.0137Z" fill="white"/>
                        <path d="M51.5733 13.8379H50.6514L49.7207 10.7155H49.6504L48.7237 13.8379H47.8106L46.5694 9.59839H47.4707L48.2774 12.8334H48.3438L49.2696 9.59839H50.1221L51.0479 12.8334H51.1182L51.9209 9.59839H52.8096L51.5733 13.8379Z" fill="white"/>
                        <path d="M53.8536 9.59846H54.709V10.2719H54.7754C54.8881 10.0301 55.0781 9.82728 55.319 9.69189C55.5598 9.55649 55.8396 9.49523 56.1192 9.51662C56.3383 9.50112 56.5583 9.53222 56.7629 9.60763C56.9675 9.68304 57.1514 9.80082 57.3011 9.95226C57.4508 10.1037 57.5624 10.2849 57.6276 10.4824C57.6928 10.68 57.7099 10.8888 57.6778 11.0934V13.8379H56.7891V11.3036C56.7891 10.6223 56.4746 10.2834 55.8174 10.2834C55.6687 10.2769 55.5202 10.3008 55.3821 10.3533C55.244 10.4059 55.1197 10.4859 55.0176 10.588C54.9154 10.69 54.838 10.8116 54.7904 10.9445C54.7429 11.0774 54.7265 11.2184 54.7422 11.3578V13.838H53.8535L53.8536 9.59846Z" fill="white"/>
                        <path d="M59.0938 7.94336H59.9825V13.8378H59.0938V7.94336Z" fill="white"/>
                        <path d="M61.2178 11.7164C61.1895 11.4378 61.2234 11.1566 61.3172 10.8911C61.4111 10.6255 61.5629 10.3813 61.7629 10.1742C61.9628 9.96707 62.2065 9.80158 62.4784 9.68834C62.7503 9.5751 63.0443 9.5166 63.3416 9.5166C63.6389 9.5166 63.9329 9.5751 64.2047 9.68834C64.4766 9.80158 64.7203 9.96707 64.9203 10.1742C65.1203 10.3813 65.272 10.6255 65.3659 10.8911C65.4598 11.1566 65.4936 11.4378 65.4654 11.7164C65.4942 11.9953 65.4607 12.2768 65.3671 12.5428C65.2734 12.8088 65.1218 13.0534 64.9217 13.2609C64.7217 13.4684 64.4778 13.6342 64.2057 13.7477C63.9335 13.8612 63.6392 13.9198 63.3416 13.9198C63.0439 13.9198 62.7496 13.8612 62.4775 13.7477C62.2053 13.6342 61.9614 13.4684 61.7614 13.2609C61.5614 13.0534 61.4097 12.8088 61.3161 12.5428C61.2225 12.2768 61.189 11.9953 61.2178 11.7164V11.7164ZM64.5508 11.7164C64.5508 10.7974 64.1123 10.26 63.3428 10.26C62.5703 10.26 62.1358 10.7974 62.1358 11.7164C62.1358 12.6427 62.5704 13.176 63.3428 13.176C64.1123 13.176 64.5508 12.639 64.5508 11.7164H64.5508Z" fill="white"/>
                        <path d="M66.4009 12.639C66.4009 11.8759 67.0044 11.4359 68.0757 11.3734L69.2954 11.3072V10.9413C69.2954 10.4935 68.981 10.2407 68.3736 10.2407C67.8775 10.2407 67.5337 10.4121 67.4351 10.7119H66.5747C66.6656 9.98367 67.3931 9.5166 68.4146 9.5166C69.5435 9.5166 70.1802 10.0457 70.1802 10.9413V13.8379H69.3247V13.2421H69.2544C69.1117 13.4559 68.9113 13.6301 68.6737 13.747C68.4361 13.864 68.1697 13.9194 67.9019 13.9078C67.7129 13.9263 67.5218 13.9073 67.341 13.852C67.1603 13.7968 66.9938 13.7065 66.8524 13.5869C66.711 13.4674 66.5977 13.3213 66.52 13.158C66.4422 12.9947 66.4017 12.8179 66.4009 12.639V12.639ZM69.2954 12.2767V11.9223L68.1958 11.9885C67.5757 12.0276 67.2945 12.2262 67.2945 12.5999C67.2945 12.9815 67.646 13.2035 68.1295 13.2035C68.2711 13.217 68.4142 13.2035 68.5502 13.1639C68.6862 13.1243 68.8123 13.0593 68.9211 12.9728C69.0299 12.8864 69.1191 12.7802 69.1834 12.6606C69.2477 12.541 69.2858 12.4105 69.2954 12.2767V12.2767Z" fill="white"/>
                        <path d="M71.3482 11.7163C71.3482 10.3767 72.0796 9.52802 73.2173 9.52802C73.4987 9.51581 73.778 9.57927 74.0226 9.71098C74.2671 9.84269 74.4667 10.0372 74.5982 10.2718H74.6646V7.94336H75.5533V13.8378H74.7017V13.168H74.6314C74.4898 13.401 74.2832 13.5931 74.0339 13.7235C73.7847 13.8539 73.5023 13.9176 73.2173 13.9077C72.0718 13.9078 71.3482 13.0591 71.3482 11.7163ZM72.2662 11.7163C72.2662 12.6155 72.7164 13.1566 73.4693 13.1566C74.2183 13.1566 74.6812 12.6077 74.6812 11.72C74.6812 10.8364 74.2134 10.2797 73.4693 10.2797C72.7212 10.2797 72.2661 10.8244 72.2661 11.7163H72.2662Z" fill="white"/>
                        <path d="M79.23 11.7163C79.2017 11.4377 79.2356 11.1566 79.3294 10.891C79.4232 10.6255 79.575 10.3813 79.7749 10.1742C79.9749 9.96706 80.2186 9.80158 80.4904 9.68834C80.7623 9.5751 81.0563 9.5166 81.3536 9.5166C81.6508 9.5166 81.9448 9.5751 82.2167 9.68834C82.4885 9.80158 82.7322 9.96706 82.9322 10.1742C83.1321 10.3813 83.2839 10.6255 83.3777 10.891C83.4715 11.1566 83.5054 11.4377 83.4771 11.7163C83.5059 11.9952 83.4725 12.2767 83.3789 12.5427C83.2853 12.8087 83.1336 13.0533 82.9336 13.2608C82.7336 13.4683 82.4897 13.6342 82.2176 13.7477C81.9455 13.8611 81.6512 13.9198 81.3536 13.9198C81.0559 13.9198 80.7616 13.8611 80.4895 13.7477C80.2173 13.6342 79.9735 13.4683 79.7735 13.2608C79.5735 13.0533 79.4218 12.8087 79.3282 12.5427C79.2346 12.2767 79.2012 11.9952 79.23 11.7163V11.7163ZM82.563 11.7163C82.563 10.7973 82.1245 10.2599 81.355 10.2599C80.5826 10.2599 80.148 10.7973 80.148 11.7163C80.148 12.6426 80.5826 13.1759 81.355 13.1759C82.1245 13.1759 82.563 12.639 82.563 11.7163Z" fill="white"/>
                        <path d="M84.6695 9.59846H85.5249V10.2719H85.5913C85.704 10.0301 85.894 9.82728 86.1349 9.69189C86.3757 9.55649 86.6555 9.49523 86.9351 9.51662C87.1542 9.50112 87.3742 9.53222 87.5788 9.60763C87.7834 9.68304 87.9673 9.80082 88.117 9.95226C88.2667 10.1037 88.3783 10.2849 88.4435 10.4824C88.5087 10.68 88.5258 10.8888 88.4937 11.0934V13.8379H87.605V11.3036C87.605 10.6223 87.2906 10.2834 86.6333 10.2834C86.4846 10.2769 86.3361 10.3008 86.198 10.3533C86.06 10.4059 85.9356 10.4859 85.8335 10.588C85.7314 10.69 85.6539 10.8116 85.6064 10.9445C85.5588 11.0774 85.5424 11.2184 85.5581 11.3578V13.838H84.6695V9.59846Z" fill="white"/>
                        <path d="M93.5152 8.54272V9.61754H94.4908V10.3223H93.5152V12.5023C93.5152 12.9464 93.7095 13.1408 94.1519 13.1408C94.2651 13.1405 94.3783 13.134 94.4908 13.1215V13.8184C94.3312 13.8453 94.1695 13.8596 94.0074 13.8612C93.0191 13.8612 92.6255 13.5339 92.6255 12.7165V10.3223H91.9107V9.6175H92.6255V8.54272H93.5152Z" fill="white"/>
                        <path d="M95.7046 7.94336H96.5855V10.2796H96.6558C96.7739 10.0355 96.9691 9.83157 97.2148 9.69567C97.4605 9.55977 97.7448 9.49849 98.0288 9.52019C98.2467 9.50903 98.4646 9.54329 98.6669 9.62053C98.8692 9.69777 99.0509 9.81609 99.199 9.96705C99.3471 10.118 99.458 10.2979 99.5238 10.4938C99.5896 10.6898 99.6086 10.897 99.5796 11.1007V13.8379H98.69V11.3071C98.69 10.6299 98.355 10.287 97.7271 10.287C97.5744 10.2752 97.4207 10.295 97.277 10.3449C97.1332 10.3949 97.0027 10.4738 96.8948 10.5762C96.7868 10.6785 96.7038 10.8019 96.6518 10.9376C96.5997 11.0733 96.5798 11.2181 96.5933 11.3618V13.8378H95.7047L95.7046 7.94336Z" fill="white"/>
                        <path d="M104.761 12.6931C104.641 13.0805 104.379 13.4157 104.022 13.6399C103.666 13.8641 103.236 13.9631 102.81 13.9196C102.513 13.927 102.219 13.8735 101.946 13.7628C101.674 13.6522 101.43 13.487 101.232 13.2788C101.034 13.0706 100.887 12.8243 100.8 12.5571C100.713 12.2899 100.689 12.0081 100.73 11.7313C100.691 11.4537 100.715 11.1713 100.801 10.9033C100.888 10.6353 101.034 10.3879 101.231 10.1779C101.428 9.96784 101.671 9.80009 101.942 9.68598C102.214 9.57186 102.509 9.51404 102.806 9.51643C104.059 9.51643 104.815 10.3224 104.815 11.6536V11.9456H101.635V11.9925C101.621 12.148 101.642 12.3046 101.696 12.4522C101.75 12.5998 101.837 12.7351 101.95 12.8495C102.062 12.9638 102.2 13.0547 102.352 13.1163C102.504 13.1778 102.669 13.2087 102.835 13.207C103.047 13.231 103.262 13.195 103.453 13.1035C103.644 13.012 103.802 12.8691 103.906 12.693L104.761 12.6931ZM101.635 11.3268H103.91C103.921 11.1845 103.9 11.0416 103.849 10.9072C103.798 10.7728 103.718 10.65 103.614 10.5466C103.509 10.4431 103.383 10.3614 103.243 10.3066C103.103 10.2519 102.953 10.2253 102.801 10.2285C102.648 10.2267 102.495 10.2539 102.353 10.3084C102.21 10.363 102.081 10.4438 101.972 10.5462C101.864 10.6485 101.778 10.7703 101.72 10.9044C101.662 11.0385 101.633 11.1821 101.635 11.3268H101.635Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_27_66">
                        <rect width="119.664" height="37.66" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
            <div class="col-md-6">
                <h5 class="fs-2 fw-bold text-dark fheader my-3 ">Find Us On</h5>
                <div class="pt-5 d-flex">
                    <p class="text-dark mx-4"><FaFacebookF/></p>
                    <p class="text-dark mx-4"><FaTwitterSquare/></p>
                    <p class="text-dark mx-4"><FaLinkedin/></p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <h1 className="fs-1 text-end p-4 fw-bolder grText my-3 ml-auto mr-0 opacity-25">Moroccoop</h1>
        </div>
    </div>
  );
}

export default Footer;
