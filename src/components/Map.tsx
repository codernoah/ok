import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

export const Map = () => {
  const bestFit = { w: 640, h: 392 };
  const aspectRatio = bestFit.w / bestFit.h;
  // const dw = window.innerWidth < bestFit.w ? window.innerWidth * 0.8 : bestFit.w;

  const dw = React.useMemo(() => {
    return window.innerWidth;
  }, [window.innerWidth]);
  const dh = dw / aspectRatio;

  const title = '백운원';
  const latitude = 37.364144;
  const longitude = 127.006631;
  // const tmapAppUrl = `tmap://route?rGoName=${encodeURIComponent(title)}&rGoX=${longitude}&rGoY=${latitude}`;
  // const tmapWebUrl = `https://m.tmap.co.kr/main/main.jsp#&query=${encodeURIComponent(title)}`;

  const handleTmapOpen = () => {
    // **A. 앱 호출 시도 (딥 링크)**
    // window.location.href = tmapAppUrl;
    window.location.href= `tmap://route?rGoName=${encodeURIComponent(title)}&rGoX=${longitude}&rGoY=${latitude}`;
  }

  const handleKakaoOpen = () => {
    window.location.href = `kakaomap://route?ep=${latitude},${longitude}&by=CAR`;
  }

  return (
    <Box>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.0913118393073!2d127.00446316467726!3d37.36401622723979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5e82e6ef6cd7%3A0x70effd5c03631c63!2z67Cx7Jq07JuQ!5e0!3m2!1sko!2skr!4v1759131856474!5m2!1sko!2skr"
        width={`${dw}px`} height={`${dh}px`}
        style={{ border: 0 }} loading="lazy" />
      <Flex mt={5} gap={3}
        justifyContent={'center'}
      >
        <Button onClick={handleTmapOpen}>
          Tmap
        </Button>
        {/* <Button onClick={() => {}}>
          Naver
        </Button> */}
        <Button onClick={() => { handleKakaoOpen }}>
          Kakao
        </Button>
      </Flex>
    </Box>
  )

  // return (
  //   <Box style={{
  //     font: 'normal normal 400 12px/normal dotum, sans-serif',
  //     width: `${dw}px`,
  //     height: `${dh}px`,
  //     color: '#333',
  //     position: 'relative',
  //   }}>
  //     {/* <div style={{ height: `${dh}px` }}> */}
  //     <div>
  //       <a href="https://map.kakao.com/?urlX=501339.0000000007&amp;urlY=1073443.0000000005&amp;itemId=1407060805&amp;q=%EB%B0%B1%EC%9A%B4%EC%9B%90&amp;srcid=1407060805&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank">
  //         <img className="map" src="http://t1.daumcdn.net/roughmap/imgmap/70e63490514236a8c30c6c3e76d80c5bf332d7bd7cd7bb81b65ae4d295cbec92" width={`${dw - 2}px`} height={`${dh - 2}px`}
  //           style={{ border: '1px solid #ccc' }} />
  //       </a>
  //     </div>
  //     <div style={{
  //       overflow: 'hidden',
  //       padding: '7px 11px',
  //       border: '1px solid rgba(0, 0, 0, 0.1)',
  //       borderRadius: '0px 0px 2px 2px',
  //       backgroundColor: 'rgb(249, 249, 249)',
  //     }}>
  //       {/* <a href="https://map.kakao.com" target="_blank" style={{ float: 'left' }}>
  //           <img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="72" height="16" alt="카카오맵" style={{ display: 'block', width: '72px', height: '16px' }} />
  //         </a> */}
  //       <div style={{ float: 'right', position: 'relative', top: '1px', fontSize: '11px' }}>
  //         {/* <a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;srcid=1407060805&amp;confirmid=1407060805&amp;q=%EB%B0%B1%EC%9A%B4%EC%9B%90&amp;rv=on" style={{ float: 'left', height: '15px', paddingTop: '1px', lineHeight: '15px', color: '#000', textDecoration: 'none' }}>로드뷰</a>
  //           <span style={{ width: '1px', padding: '0', margin: '0 8px 0 9px', height: '11px', verticalAlign: 'top', position: 'relative', top: '2px', borderLeft: '1px solid #d0d0d0', float: 'left' }}></span> */}
  //         {/* <span style="width: 1px;padding: 0;margin: 0 8px 0 9px;height: 11px;vertical-align: top;position: relative;top: 2px;border-left: 1px solid #d0d0d0;float: left;"></span> */}
  //         {/* <a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;eName=%EB%B0%B1%EC%9A%B4%EC%9B%90&amp;eX=501339.0000000007&amp;eY=1073443.0000000005" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">길찾기</a> */}
  //         <a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;eName=%EB%B0%B1%EC%9A%B4%EC%9B%90&amp;eX=501339.0000000007&amp;eY=1073443.0000000005" style={{ float: 'left', height: '15px', paddingTop: '1px', lineHeight: '15px', color: '#000', textDecoration: 'none' }}>길찾기</a>
  //         <span style={{ width: '1px', padding: '0', margin: '0 8px 0 9px', height: '11px', verticalAlign: 'top', position: 'relative', top: '2px', borderLeft: '1px solid #d0d0d0', float: 'left' }}></span>
  //         {/* <span style="width: 1px;padding: 0;margin: 0 8px 0 9px;height: 11px;vertical-align: top;position: relative;top: 2px;border-left: 1px solid #d0d0d0;float: left;"></span> */}
  //         {/* <a target="_blank" href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=1407060805&amp;itemId=1407060805&amp;q=%EB%B0%B1%EC%9A%B4%EC%9B%90&amp;urlX=501339.0000000007&amp;urlY=1073443.0000000005" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">지도 크게 보기</a> */}
  //         <a target="_blank" href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=1407060805&amp;itemId=1407060805&amp;q=%EB%B0%B1%EC%9A%B4%EC%9B%90&amp;urlX=501339.0000000007&amp;urlY=1073443.0000000005" style={{ float: 'left', height: '15px', paddingTop: '1px', lineHeight: '15px', color: '#000', textDecoration: 'none' }}>지도 크게 보기</a>
  //       </div>
  //     </div>
  //     <div>
  //       <span style={{ borderBottom: '0px none #333333', position: 'absolute', left: '-25px', top: '-136px', width: '0px', height: '40px' }}>
  //       </span>
  //     </div>
  //   </Box>
  // )
}
