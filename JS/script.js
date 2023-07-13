
function loader(){
  $(document).ready(function(){
    var counter = 0;
    var count = 0;
    var i = setInterval(function(){
      $(".loader h1").html(count + "%");
      // $(".loader").css("width",counter + "%");
      
      counter++;
      count++;
      if(counter == 101){
        clearInterval(i);
        $("#loader").style.height=0;
        $("#loader h1").style.opacity=0;
      }
      
    },30);
    });
}
loader();

  




function initialize() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
  })

  function files(index) {
    var data = `https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/0.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/1.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/2.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/3.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/4.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/5.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/6.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/7.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/8.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/9.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/10.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/11.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/12.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/13.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/14.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/15.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/16.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/17.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/18.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/19.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/20.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/21.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/22.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/23.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/24.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/25.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/26.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/27.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/28.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/29.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/30.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/31.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/32.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/33.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/34.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/35.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/36.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/37.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/38.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/39.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation540.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/41.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/42.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/43.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/44.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/45.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/46.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/47.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/48.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/49.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/50.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/51.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/52.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/53.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/54.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/55.web
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/56.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/57.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/58.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/59.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/60.web
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/61.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/62.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/63.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/64.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/65.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/66.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/67.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/68.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/69.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/70.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/71.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/72.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/73.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/74.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/75.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/76.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/77.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/78.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/79.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/80.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/81.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/82.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/83.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/84.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/85.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/86.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/87.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/88.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/89.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/90.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/91.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/92.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/93.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/94.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/95.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/96.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/97.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/98.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/99.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/100.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/101.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/102.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/103.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/104.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/105.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/106.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/107.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/108.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/109.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/110.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/111.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/112.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/113.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/114.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/115.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/116.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/117.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/118.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/119.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/120.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/121.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/122.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/123.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/124.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/125.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/126.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/127.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/128.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/129.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/130.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/131.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/132.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/133.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/134.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/135.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/136.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/137.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/138.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/139.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/140.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/141.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/142.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/143.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/144.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/145.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/146.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/147.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/148.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/149.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/150.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/151.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/152.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/153.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/154.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/155.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/156.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/157.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/158.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/159.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/160.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/161.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/162.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/163.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/164.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/165.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/166.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/167.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/168.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/169.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/170.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/171.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/172.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/173.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/174.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/175.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/176.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/177.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/178.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/179.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/180.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/181.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/182.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/183.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/184.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/185.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/186.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/187.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/188.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/189.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/190.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/191.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/192.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/193.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/194.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/195.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/196.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/197.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/198.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/199.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/200.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/201.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/202.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/203.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/204.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/205.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/205.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/206.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/207.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/208.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/209.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/210.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/211.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/212.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/213.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/213.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/214.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/215.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/216.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/217.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/218.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/219.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/220.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/221.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/222.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/223.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/224.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/225.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/226.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/227.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/228.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/229.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/230.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/231.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/232.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/232.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/232.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/233.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/234.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/235.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/236.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/237.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/238.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/239.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/240.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/241.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/241.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/242.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/243.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/244.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/245.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/246.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/247.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/248.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/249.webp
  
   `;
    return data.split("\n")[index];
  }

  const frameCount = 249;

  const images = [];
  const imageSeq = {
      frame: 0
  };

  for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
  }

  gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
          trigger: "canvas",
          start:"top 65%",
          end:"bottom top",
          scrub: 0.5,
          // markers:true
      },
      onUpdate: render
  });

  images[0].onload = render;

  function render() {
      scaleImage(images[imageSeq.frame], context)
  }

  function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }



  gsap.to("canvas",{
    top:"50%",
    scrollTrigger:{
        trigger:"#canvas",
        start:"0% 80%",
        end:"bottom -30%",
        scrub:.1,
        // markers:true       
    }
  })

  ScrollTrigger.create({
    pin:true,
    trigger:"#page4",
    start:"bottom bottom",
    end:"bottom 90%",
    // markers:true
  })


}
initialize();

