import { useEffect } from "react";
import styled from '@emotion/styled';

declare const window: typeof globalThis & {
  kakao: any;
};

interface IMapPage {
  address?: string;
  data?: any;
}

// 제주특별자치도 제주시 한림읍 협재리 산 100-1
// center: new window.kakao.maps.LatLng(33.4089411,126.2269726)
// 서울특별시 중구 세종대로 110
// new window.kakao.maps.LatLng(37.5655901,126.9780225)

export default function MapPage(props: IMapPage) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=49d7bc1bb0773f8853f0c0f71370b1dc&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
         window.kakao.maps.load(function () {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(37.5662952,126.9779451),
            level:4,
          };
          const map = new window.kakao.maps.Map(container, options);

        const imageSrc = '/images/lg.png',    
        imageSize = new window.kakao.maps.Size(64, 69), 
        imageOption = {offset: new window.kakao.maps.Point(30, 69)}; 
          
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

          const markerPosition  = new window.kakao.maps.LatLng(37.5655901,126.9780225)
          const marker = new window.kakao.maps.Marker({
              position: markerPosition,
              image: markerImage
          });
          const infowindow = new window.kakao.maps.InfoWindow({
            content: `<div style="width:220px;text-align:center;padding:10px;">서울특별시 중구 세종대로 110</div>`+
            `<div style='padding:0px 0px 15px 15px'><a href="http://kko.to/uLiRvUfYy" target="_blank" class="link">찾아오시는 길</a></div>`,

          });
          infowindow.open(map, marker);
          marker.setMap(map);

        });
    };

  }, []);

  return (
    <>

      <div id="map" style={{ width: "100%", height: "100%" }}>
      </div>
    </>
  );
}
