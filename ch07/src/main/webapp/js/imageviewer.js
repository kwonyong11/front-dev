//
// ImageViewer
//
const ImageViewer = {
	_images: [{
		name: "국화",
		file: "Chrysanthemum.jpg"
	}, {
		name: "사막",
		file: "Desert.jpg"
	}, {
		name: "수국",
		file: "Hydrangeas.jpg"
	}, {
		name: "해파리",
		file: "Jellyfish.jpg"
	}, {
		name: "코알라",
		file: "Koala.jpg"
	}, {
		name: "등대",
		file: "Lighthouse.jpg"
	}, {
		name: "펭귄",
		file: "Penguins.jpg"
	}, { 
		name: "툴립",
		file: "Tulips.jpg"
	}],
	_changeImage: function(){
		let index = Math.floor(Math.random() * ImageViewer._images.length); 
		let info = ImageViewer._images[index];
		
		$('.image-viewer img').attr({
			src: 'images/' + info.file,
			art: info.name,
			title: info.name
		});
	},
	_consoleImageLog: function(){
		let name = $(this).attr('alt');
		console.log(name);
	},
	_slideImage: function(){
		buttonName = $(this).text();
	    $(this).text((buttonName == '슬라이드 시작' ? '슬라이드 중지' : '슬라이드 시작'));
	    buttonName == '슬라이드 시작' && ImageViewer._startShow();
	    buttonName == '슬라이드 중지' && ImageViewer._stopShow();
	},
	 _startShow: function() {
         _this = this;
         interval = setInterval(function() {
         buttonName = $(this).text();
         ImageViewer._changeImage();
      }, 1000);
   },
   _stopShow: function() {
      clearInterval(interval);
   },
	init: function(){
		$(function(){
			$('.image-viewer #btn-change').click(ImageViewer._changeImage);
			$('.image-viewer img')
				.mousedown(ImageViewer._changeImage)
				.dblclick(ImageViewer._consoleImageLog);
			$('.image-viewer #btn-slideshow').click(ImageViewer._slideImage);
			// 디폴트 이미지 선택하기
			ImageViewer._changeImage();
		});
	}
};