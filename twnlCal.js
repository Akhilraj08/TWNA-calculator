"use strict";

const twnlStyle = {

	css: function() {
		return(`
			#insertTwnlCalModule {
				/*max-height: 100vh*/
			}

			.spinner {
			    width: 50px;
			    height: 50px;
			    display: inline-block;
			    border-width: 2px;
			    border-color: rgba(255, 255, 255, 0.05);
			    border-top-color: #fff;
			    animation: spin 1s infinite linear;
			    border-radius: 100%;
			    border-style: solid;
			    margin: 300px auto;
			}

			@keyframes spin {
			  100% {
			    transform: rotate(360deg);
			  }
			}


			@media print {
				body {-webkit-print-color-adjust: exact;}
				}
				

			@font-face {
				font-family: 'Quicksand';
				font-style: normal;
				font-weight: 400;
				src: local('Quicksand Regular'), local('Quicksand-Regular'), url(https://fonts.gstatic.com/s/quicksand/v9/6xKtdSZaM9iE8KbpRA_hJFQNYuDyP7bh.woff2) format('woff2');
				unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
			  }
			  /* latin-ext */
			  @font-face {
				font-family: 'Quicksand';
				font-style: normal;
				font-weight: 400;
				src: local('Quicksand Regular'), local('Quicksand-Regular'), url(https://fonts.gstatic.com/s/quicksand/v9/6xKtdSZaM9iE8KbpRA_hJVQNYuDyP7bh.woff2) format('woff2');
				unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
			  }
			  /* latin */
			  @font-face {
				font-family: 'Quicksand';
				font-style: normal;
				font-weight: 400;
				src: local('Quicksand Regular'), local('Quicksand-Regular'), url(https://fonts.gstatic.com/s/quicksand/v9/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2) format('woff2');
				unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
			  }

			  @font-face {font-family: "Gotham Rounded";
				src: url("https://db.onlinewebfonts.com/t/d31d488d2171c1668c15962fc6cf1ef7.eot");
				src: url("https://db.onlinewebfonts.com/t/d31d488d2171c1668c15962fc6cf1ef7.eot?#iefix") format("embedded-opentype"),
				url("https://db.onlinewebfonts.com/t/d31d488d2171c1668c15962fc6cf1ef7.woff2") format("woff2"),
				url("https://db.onlinewebfonts.com/t/d31d488d2171c1668c15962fc6cf1ef7.woff") format("woff"),
				url("https://db.onlinewebfonts.com/t/d31d488d2171c1668c15962fc6cf1ef7.ttf") format("truetype"),
				url("https://db.onlinewebfonts.com/t/d31d488d2171c1668c15962fc6cf1ef7.svg#Gotham Rounded") format("svg");
				}

			@media only screen and (min-width: 768px){
				max-height: 700px	
			}
			
			.twna-calculator {
				position: relative;
				padding-top: 60px;
			}

			.twna-calculator p {
				margin: 0;
			}

			.twna-calculator .hidden {
				display: none !important;
			}

			/*health*/
			.twna-calculator .medicines-wrapper{
			    margin-top: 15px;
			}

			.twna-calculator .hide-wrapper{
			    display: none;
			}

			.twna-calculator .show-wrapper{
			    display: block;
			}

			.twna-calculator .medicines-wrapper p{
			    margin-bottom: 10px;
			}

			.twna-calculator .medicines-wrapper span{
			    font-family: Gotham Rounded;
			    font-size: 18px;
			    font-weight: 500;
			    line-height: 1.16;
			    text-align: center;
			    color: #2c306b;
			    margin-top: 20px;
			}

			@media only screen and (min-width: 768px){
			    
			    .twna-calculator .medicines-wrapper span{
			        height: 20px;
			        font-size: 22px;
			    }

			    .twna-calculator .hide-wrapper{
			        display: block;
			    }
			    
			    .twna-calculator .show-wrapper{
			        display: none;
			    }
			}

			.twna-calculator .image-choice-options{
				display: inline-block;
			}

			.twna-calculator .image-choice-options.active .items >div{
				border-color: #074c8c;
			}

			.twna-calculator .show-slide {
				display: block;
			}

			.twna-calculator .hide-slide {
				display: none;
			}

			.twna-calculator .slide-left,
			.twna-calculator .slide-right{
			    top: 40% !important;
			    width: 21px;
			    position: absolute;
			}

			.twna-calculator .slide-left{
			    left: 35px !important;
			    background: none !important;
			    background-image: url("images/arrow-left.png") !important;
			    background-size: contain !important;
			}

			.twna-calculator .slide-right{
			    right: 35px !important;
			    background: none !important;
			    background-image: url("images/arrow-right.png") !important;
			    background-size: contain !important;
			}

			.twna-calculator .slide-left:before{
			    content: "" !important;
			}

			.twna-calculator .slide-right:before{
			    content: "" !important;
			}

			@media only screen and (min-width: 768px){
				.twna-calculator .hide-slide {
					display: inline-block;
				}
			
				.twna-calculator .slide-left,
				.twna-calculator .slide-right {
					display: none;
				}		
			}

			/*twnlBabyClothesNeeds*/
			.twna-calculator .options{
			  width: 170px;
			  height: 65px;
			  border-radius: 10px;
			  border: solid 2px #94b7d7;
			  background-color: #f8f8f8;
			  display: inline-block;
			  margin: 0 20px;
			  margin-bottom: 20px;
			  cursor: pointer;
			}

			.twna-calculator .options.active{
				border-color: #074c8c;
			}

			.twna-calculator .center-fix{
			  font-family: Gotham Rounded;
			  font-size: 18px;
			  font-weight: 500;
			  line-height: 1.16;
			  text-align: center;
			  margin: 7px 0;
			}

			.twna-calculator .center-fix div{
				color: #4990be;
			}

			.twna-calculator .center-fix p,
			.twna-calculator .section-wrapper .center-fix p {
				color: #4f5284;
			  	text-align: center ;
			  	font-size: 16px;
			}

			@media only screen and (min-width: 768px){
			  .twna-calculator .options{
			    width: 180px;
			    height: 70px;
			  }

			  .twna-calculator .center-fix{
			    font-size: 20px;
			    margin: 10px 0;
			  }
			}

			/*image choice*/
			.twna-calculator .progress-bar-wrapper{
			    border-bottom: 1px solid rgba(0,0,0,0.3);
			    position:fixed;
				width: 100%;
				max-width: 720px;
			    background: #ffffff;
			    z-index: 1;
			}

			.twna-calculator .progress-bar-wrapper p{
			    font-family: Gotham Rounded;
			    font-size: 20px;
			    font-weight: 500;
			    line-height: 1.1;
			    text-align: left;
			    color: #2e377e;
			}

			.twna-calculator .progress{
			    border-radius: 80px;
			    margin: 5px 0;
			    height: 15px;
				display: flex;
				border: 1px solid #94b7d7;
			}

			.twna-calculator .progress-bar{
			    /* width: 514px; */
			    /* flex-basis: calc(100%/12); */
			    border-radius: 10px;
			    background-color: #94b7d7;
			}

			.twna-calculator .section-wrapper{
			    padding-top: 110px;
			}

			.twna-calculator .section-wrapper h1{
			    font-family: Gotham Rounded;
			    font-size: 22px;
			    font-weight: bold;
			    line-height: 2.4;
			    text-align: left;
			    color: #2c306b;
			    margin: 0;
			}

			.twna-calculator .section-wrapper p{
			    font-family: Gotham Rounded;
			    font-size: 18px;
			    line-height: 1.5;
			    text-align: left;
			    color: #8e908f;
			}

			.twna-calculator .progress-bar-wrapper >div{
			    margin: 10px 20px;
			}

			.twna-calculator .question-section-wrapper{
			    margin: 0 20px;
			}

			.twna-calculator .answer-section-grey-wrapper{
			    background-color: #f8f8f8;
			    margin-top: 30px;
			    padding: 50px 0;
			}

			.twna-calculator .answer-section-white-wrapper{
			    background-color: white;
			    margin-top: 30px;
			}

			.twna-calculator .check{
			    border: 2px solid #91b7de;
			    background: #91b7de;
			    border-radius: 50%;
			    width: 40px;
			    height: 40px;
			    margin: auto;
				margin-bottom: 20px;
				padding: 3px;
			}

			.twna-calculator .blank-circle{
			    background: #ffffff;
			}

			.twna-calculator .heading-wrapper{
			    text-align: center;
			}

			.twna-calculator .heading-wrapper .fa{
			    color: white;
			    transform: translate(1px,5px);
			}

			.twna-calculator .blank-circle .fa{
			    visibility: hidden;
			}

			.twna-calculator .heading-wrapper div{
			    font-family: Gotham Rounded;
			    font-size: 20px;
			    font-weight: 500;
			    line-height: 1;
			    color: #2c306b;
			    text-align: center;
			}

			.twna-calculator .heading-wrapper p{
			    font-family: Gotham Rounded;
			    font-size: 18px;
			    line-height: 1.25;
			    text-align: left;
			    color: #8e908f;
			    margin-bottom: 0;
			    text-align: center;
			    margin-top: 10px;
			}

			.twna-calculator .sewa-options-wrapper{
			    text-align: center;
			    //display: none;
			}

			.twna-calculator .sewa-options-wrapper div{
			    font-family: Gotham Rounded;
			    font-size: 22px;
			    font-weight: 500;
			    line-height: 1.16;
			    text-align: center;
			    color: #2c306b;
			    margin-top: 20px;
			}

			.twna-calculator .section-wrapper select{
				padding: 0 15px;
				padding-right: 40px;
			    font-size: 18px;
			    margin: 20px;
			    margin-bottom: 0;
			    width: 280px;
			    height: 61px;
			    border-radius: 10px;
			    border: solid 2px #94b7d7;
			    -webkit-appearance: none;
			    -moz-appearance: none;
			     appearance: none;
			    background: url("images/arrow-down.png") #f8f8f8 no-repeat calc(100% - 10px)/20px !important;
			}

			.twna-calculator .options-wrapper{
			    text-align: center;
			    margin-top: 40px;
			    position:relative;
			}

			.twna-calculator .slick-track{
			    height: auto !important;
			}

			.twna-calculator .slick-slide{
			    height: auto !important;
			}

			.twna-calculator .slick-prev,
			.twna-calculator .slick-next{
			    top: 40% !important;
			}

			.twna-calculator .slick-prev{
			    left: 35px !important;
			    background: none !important;
			    background-image: url("images/arrow-left.png") !important;
			    background-size: contain !important;
			}

			.twna-calculator .slick-next{
			    right: 35px !important;
			    background: none !important;
			    background-image: url("images/arrow-right.png") !important;
			    background-size: contain !important;
			}

			.twna-calculator .slick-prev:before{
			    content: "" !important;
			}

			.twna-calculator .slick-next:before{
			    content: "" !important;
			}

			.twna-calculator .items{
			    display: inline-block;
			    margin: 0 30px;
			    margin-bottom: 20px;
			    width: auto !important;
			}

			.twna-calculator .items >div{
			    margin-bottom: 10px;
			    background-size: 180px 180px;
			    background-repeat: no-repeat;
			    background-position: center;
			    width: 204px;
			    height: 203px;
			    border-radius: 10px;
			    border: solid 1px #94b7d7;
				background-color: #ffffff;
				cursor: pointer;
			}

			.twna-calculator .items.active > div {
				border-color: #074c8c;
			}

			.twna-calculator .items p{
			    height: 20px;
			    font-family: Gotham Rounded;
			    font-size: 22px;
			    font-weight: 500;
			    line-height: 1.16;
			    text-align: center;
			    color: #2c306b;
			}

			.twna-calculator .options-wrapper img{
			    width: 90%;
			    border-radius: 10px;
    			height: 90%;
    			margin: 5%;
			}

			.dana_pendidikan_page .answer-section-grey-wrapper,
			.dana_pendidikan_page .answer-section-white-wrapper,
			.health_page .answer-section-grey-wrapper,
			.health_page .answer-section-white-wrapper{
				cursor: pointer;
			}

			.ticked {
				display: inline-block;
				transform: rotate(45deg);
				height: 25px;
				width: 15px;
				border-bottom: 5px solid #ffffff;
				border-right: 5px solid #ffffff;
			  }

			.twna-calculator .button-wrapper{
			    position: relative;
				text-align: initial;
				position: sticky;
				height: 65px;
				position: -webkit-sticky;
				bottom: 0;
				background: #ffffff;
			}

			.twna-calculator .button-wrapper button{
			    border: none;
			    color: white;
			    font-size: 16px;
			    padding: 0px;
			    width: 150px;
			    height: 40px;
			    border-radius: 35px;
				margin: 10px 0;
				cursor: pointer;
			}

			#back-button{
			    background-color: #dabc8c;
			    margin: 12px 0;
			}

			#next-button{
			    background-color: #2c306b;
			    margin: 12px 0;
			    position: absolute;
			    right: 0px;
			}

			.twna-calculator .counter{
			    display: flex;
				counter-reset: my-counter;
				line-height: 1;
			}

			.twna-calculator .counter div{
			    flex-basis: calc(100%/12);
			    text-align: right;
			    counter-increment: my-counter;
			}

			.twna-calculator .counter div::before{
			    content: counter(my-counter);
			}


			@media only screen and (min-width: 768px){
			    #back-button,
			    #next-button{
			        margin: 30px 0;
			    }

			    .twna-calculator .slick-track{
			        margin: auto;
			        max-width: 1100px;
			    }

			    .twna-calculator .slick-slide{
			        height: auto !important;
			        width: auto !important;
			    }

			    .twna-calculator .items{
			        margin: 0 15px;
			    }

			    #next-button{
			        background-color: #2c306b;
			        position: absolute;
			        right: 15px;
			    }

			    .twna-calculator .button-wrapper{
					text-align: initial;
					height: 130px;
			    }

			    .twna-calculator .button-wrapper button{
			        width: 240px;
			     	height: 70px;
			        margin: 30px 0;
			        font-size: 20px;
			    }

			    #back-button,
			    #next-button{
			        margin: 30px 0;
			    }

			    .twna-calculator .check{
			        width: 49px;
					height: 49px;
					padding: 6px;
					margin-bottom: 30px;
			    }

			    .twna-calculator .heading-wrapper .fa{
			        transform: translate(1px,8px);
				}
				
				.sewa-options-wrapper select{
					width: 335px !important;
				}
			}

			@media only screen and (min-width: 1024px){

			    .twna-calculator .progress{
			        height: 18px;
			    }

			    .twna-calculator .progress-bar-wrapper {
			    	max-width: 940px;
			    }

			    .twna-calculator .progress-bar-wrapper p{
			        font-size: 24px;
			    }

			    .twna-calculator .progress-bar-wrapper >div{
			        margin: 20px;
			    }

			    .twna-calculator .section-wrapper h1{
			        font-size: 24px;
			        line-height: 2.5;
			    }

			    .twna-calculator .section-wrapper p{
			        font-size: 18px;
			    }

			    .twna-calculator .answer-section-grey-wrapper{
			        margin-top: 60px;
			    }
			    
			    .twna-calculator .answer-section-white-wrapper{
			        margin-top: 60px;
			    }

			    .twna-calculator .heading-wrapper div{
			        font-size: 24px;
			    }
			    
			    .twna-calculator .heading-wrapper p{
			        font-size: 20px;
			    }

			    .twna-calculator .section-wrapper select{
					padding: 0 30px;
					font-size: 20px;
			        width: 407px;
			        height: 71px;
					margin: 30px;
					background: url("images/arrow-down.png") #f8f8f8 no-repeat calc(100% - 30px)/30px !important;
			    }

			    .twna-calculator .sewa-options-wrapper div{
			        margin-top: 0;
			    }

			    #next-button{
			        background-color: #2c306b;
			        position: absolute;
			        right: 15px;
			    }

			    .twna-calculator .button-wrapper{
					text-align: initial;
					height: 130px;
			    }

			    .twna-calculator .button-wrapper button{
			        width: 240px;
			        height: 70px;
			        margin: 30px 0;
			    }

			    #back-button,
			    #next-button{
			        margin: 30px 0;
			    }

			    .twna-calculator .slick-track{
			        margin: auto;
			        max-width: 1100px;
			    }

			    .twna-calculator .slick-slide{
			        height: auto !important;
			        width: auto !important;
			    }

			    .twna-calculator .items{
			        margin: 0 30px;
			    }

			    .twna-calculator .check{
			        width: 49px;
					height: 49px;
					padding: 6px;
			    }

			    .twna-calculator .heading-wrapper .fa{
			        transform: translate(1px,8px);
				}
				
				.sewa-options-wrapper select{
					width: 410px !important;
				}
			}

			/*twnlPopup*/
			.twna-calculator .popup-modal {
				position: fixed;
				top: 0;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.73);
				z-index: 9999;
				left: 0;
			}

			.twna-calculator .popup{
				width: 300px;
				height: 90vh;
				border-radius: 10px;
				background-color: #f6fbff;
				text-align: center;
				position: absolute;
				left: 0;
				right: 0;
				margin: 0 auto;
			}

			.twna-calculator .popup h1{
			  font-family: Gotham Rounded;
			  font-size: 22px;
			  font-weight: 500;
			  line-height: 1.2;
			  text-align: center;
			  color: #2e377e;
			  margin: auto;
			  padding: 10px 10px;
			}

			.twna-calculator .point-wrapper{
				display: flex;
				max-width: 500px;
				margin: auto;
				margin-bottom: 10px;
			}

			.twna-calculator .point-number{
			  flex-basis: 10%;
			  padding: 0px 20px;
			  height: 36px;
			  margin: auto;
			}

			.twna-calculator .number-container{
			  background-color: #91b7de;
			  border-radius: 50%;
			  width: 25px;
			  height: 25px;
			  font-family: Gotham Rounded;
			  font-size: 16px;
			  font-weight: 500;
			  line-height: 1.5;
			  text-align: center;
			  color: #ffffff;
			}

			.twna-calculator .point-text{
			  flex-basis: 90%;
			  font-family: Gotham Rounded;
			  font-size: 16px;
			  line-height: 1.5;
			  text-align: left;
			  color: #2c306b;
			  padding-right: 20px;
			}

			.twna-calculator .popup button{
			  width: 280px;
			  height: 45px;
			  border-radius: 10px;
			  border: solid 1px #2c306b;
			  background-color: #2c306b;
			  font-family: Gotham Rounded;
			  font-size: 24px;
			  font-weight: 500;
			  line-height: 0.8;
			  text-align: center;
			  color: #ffffff;
			  margin-top: 10px;
			  position: relative;
			  top: -30px;
			  cursor: pointer;
			}

			.twna-calculator .popup-footer{
			  width: 100%;
			  height: 65px;
			  background-color: rgba(205,228,251,0.65);
			  position: absolute;
			  bottom: 0;
			  border-radius: 10px;
			}

			.twna-calculator .dotted-footer{
			  width: 100%;
			  height: 22px;
			  position: absolute;
			  bottom: 0;
			  overflow: hidden;
			  border-radius: 10px;
			}

			.twna-calculator .dots{
				border: 5px dotted #94b7d7;
				height: 15px;
				margin-bottom: 5px;
			}

			@media only screen and (min-width:768px){
				.twna-calculator .popup{
					width: 400px;
					height: 510px;
					margin: 0;
					position: relative;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
				  }

				  .twna-calculator .popup h1{
					font-size: 24px;
					padding: 20px 10px;
				  }

				  .twna-calculator .number-container{
					width: 36px;
					height: 36px;
					font-size: 20px;
					line-height: 1.8;
				  }

				  .twna-calculator .point-text{
					font-size: 16px;
				  }

				  .twna-calculator .popup-footer{
					height: 80px;
				  }

				  .twna-calculator .popup button{
					width: 350px;
					height: 55px;
					font-size: 30px;
					top: -50px;
				  }

				  .twna-calculator .point-wrapper{
				  	margin-bottom: 18px;
				  }

				  .twna-calculator .dotted-footer{
					height: 45px;
				  }
				  
				  .twna-calculator .dots{
					  border: 10px dotted #94b7d7;
					  height: 30px;
					  margin-bottom: 10px;
				  }
			}

			/*Pendidikan*/
			.twna-calculator .fasilitas,
			.twna-calculator .kurikulum{
				text-align: center;
				font-size: 18px;
				color: #2c306b;
				margin-top: 20px;
			}

			.twna-calculator .fasilitas span,
			.twna-calculator .kurikulum span,
			.twna-calculator .fees span{
				color: #2c306b;
				font-weight: bold;
			}

			.twna-calculator .fees{
				display: flex;
				text-align: center;
				font-size: 16px;
				color: #2c306b;
				margin: 0 auto;
				margin-top: 20px;
				max-width: 550px;
			}

			.twna-calculator .fees >div{
				flex-basis: 50%;
				padding: 0 40px;
				text-align: center;
			}

			#fees-1{
				border-right: 2px solid #94b7d7;
			}

			@media only screen and (min-width: 768px){
				.twna-calculator .fasilitas,
				.twna-calculator .kurikulum{
					font-size: 24px;
				}

				.twna-calculator .fees{
					font-size: 24px;
				}
			}

			/*Result*/
			.twna-calculator .twnl-overlay{
			  position: absolute;
			  top: 0;
			  left: 0;
			  width: 100%;
			  height: 100%;
			  z-index: 10;
			  background-color: rgba(0,0,0,0.5); /*dim the background*/
			  text-align: center;
			  display: none;
			}
	
			.twna-calculator .twnl-overlay.active{
				display: block;			
			}

			.twna-calculator .result_page, 
			.twna-calculator .pdf-page {
		    	background: transparent;
		    }

			.twna-calculator .result_page.active .result-content-wrap,
			.twna-calculator .result_page.active .pdf-page,
			.twna-calculator .result_page.active {
				background: #fff;
			}

			.twna-calculator .result_header{
				background-image: url("images/background-banner.png");
				background-size: 140% auto;
			    background-repeat: no-repeat;
			    background-position: center 0;
				text-align: center;
				margin-bottom: 50px;
			}

			.twna-calculator .result_header h1{
			  visibility: hidden;
			  margin: 0;
			  margin-bottom: 20px;
			}

			.twna-calculator .result_header img{
				width: 100%;
				/* position:relative; */
				/* top: -32px; */
			}

			.twna-calculator .result_header div{
			  font-family: Gotham Rounded;
			  font-size: 18px;
			  /* line-height: 2.71; */
			  text-align: center;
			  color: #ffffff;
			  /* position: relative; */
			  /* top: -92px; */
			}

			.twna-calculator .result_header .result-header-inner {
				position: relative;
			}

			.twna-calculator .result_header .result-header-inner div {
				position: absolute;
			    bottom: 10px;
			    left: 0;
			    right: 0;
			}

			.twna-calculator .result_header p{
			  font-size: 22px;
			  font-weight: 500;
			  line-height: 1.2;
			  margin: 0;
			}

			.twna-calculator .summary_note{
			  font-family: Gotham Rounded;
			  font-size: 16px;
			  line-height: 1.29;
			  text-align: center;
			  color: #2c306b;
			  padding: 0 20px;
			}

			.twna-calculator .summary_list{
				display: flex;
				max-width: 1080px;
				margin: auto;
				text-align: center;
			}

			.twna-calculator .summary_list div{
			  font-family: Gotham Rounded;
			  font-size: 15px;
			  line-height: 3.57;
			  text-align: left;
			  color: #2c306b;
			  list-style-type: none;
			  margin: 10px 0;
			  text-align: left;
			}

			.twna-calculator .categories_list{
				padding-left: 20px;
				flex-basis: 60%;
			}

			.twna-calculator .price_list{
				padding-left: 10px;
				flex-basis: 40%;
			}
			
			.twna-calculator .result_content{
				background-image: url("images/blue-background.png");
				background-size: 100% 1220px;
				background-repeat: no-repeat;
				margin-top: 55px;
				text-align: center;
				background-position: 0 10px;
			}

			.twna-calculator #twnlResultPagePage3 .result_content{
				background-size: 100% 710px;
				margin-top: 0;
			}

			.twna-calculator .result_content_memilih {
				background-image: url("images/blue-background.png");
				background-position: center -1330px;
				margin-top: 0;
				background-size: 100% 1600px;
				text-align: center;
				background-repeat: no-repeat;
			}

			#ribbon-banner{
				max-width: 310px;
			}

			.twna-calculator .expert_heading{
			  font-family: Gotham Rounded;
			  font-size: 18px;
			  font-weight: bold;
			  line-height: 1;
			  text-align: center;
			  color: #ffffff;
			  position: relative;
			  top: -50px;
			  max-width: 250px;
			  margin: auto;
			  margin-bottom: -110px;
			}

			.twna-calculator .expert_heading img{
			  height: 20px;
			  vertical-align: baseline;
			}

			.expert-recommendation{
				display: block;
				margin: auto;
			}

			#recommendation-family{
				width: 70%;
				position: relative;
				top: 100px;
			}

			#recommendation{
				position: relative;
				top: -15px;
				width: 100%;
				height: 255px;
			}

			.twna-calculator .er_text{
			  font-family: Gotham Rounded;
			  font-size: 14px;
			  line-height: 1;
			  text-align: center;
			  color: #ffffff;
			  position: relative;
			  top: -115px;
			  max-width: 650px;
			  margin: auto;
			  margin-bottom: -120px;
			  left:50%;
			  transform: translate(-50%,-50%);
			}

			.twna-calculator .er_text h4{
			  margin: 5px 35px;
			  line-height: 1.2;
			  font-size: 14px !important;
			  font-weight: bold;
			}

			.twna-calculator .er_text p{
			  font-size: 14px;
			  line-height: 1.2;
			  font-weight: normal;
			  margin: 0 45px;
			}

			.twna-calculator .result_content button{
				border: none;
				font-family: Gotham Rounded;
				font-size: 16px;
				font-weight: bold;
				line-height: 1.2;
				text-align: center;
				color: #ffffff;
				border-radius: 5px;
				background-color: #6c9acd;
				width: 95%;
				height: 50px;
			}

			.twna-calculator .financial_prep{
				display: flex;
				flex-direction: column;
				margin: auto;
				margin-top: 50px;
			}

			.twna-calculator .financial_prep div{
				flex-basis: 50%;
				padding: 0 70px;
			}

			.twna-calculator .financial_prep #tips{
				margin-bottom: 50px;
			}

			.twna-calculator .financial_prep div>img{
				width: 120px;
			  	height: 100px;
			}

			.twna-calculator .financial_prep h4{
				font-family: Gotham Rounded;
				font-size: 16px !important;
				font-weight: bold;
				line-height: 1.2;
				text-align: center;
				color: #2c306b;
				margin: 0;
			}

			.twna-calculator .financial_prep span{
				font-family: Gotham Rounded;
				font-size: 16px;
				line-height: 1.2;
				text-align: center;
				color: #2c306b;
			}

			#illustration{
				margin-top: 40px;
				width: 100%;
			}

			.twna-calculator .illustration-text{
				font-family: Gotham Rounded;
				font-size: 20px;
				font-weight: bold;
				line-height: 1;
				text-align: center;
				color: #165897;
				position: relative;
				top: 60px;
			}

			.twna-calculator .result_illustration{
				max-width: 1080px;
				margin: auto;
				text-align: center;
				font-family: Gotham Rounded;
				font-size: 18px;
				line-height: 1.29;
				text-align: center;
				color: #2c306b;
				margin-top: 80px;
			}

			.twna-calculator .result_illustration p{
				padding: 0 20px;
				font-size: 16px;
			}

			.twna-calculator .result_illustration img{
				margin: 20px 0;
				width: 100%;
			}

			.twna-calculator .notes-wrapper{
			  	background-color: #cde4fb;
			  	font-weight: bold;
			  	margin-bottom: 50px;
			}

			.twna-calculator .notes-wrapper p{
				font-family: Gotham Rounded;
				font-size: 16px;
				line-height: 1.29;
				text-align: center;
				color: #2c306b;
				max-width: 1050px;
				margin: auto;
				padding: 30px 0;
			}

			.twna-calculator .download-pdf-wrapper{
				text-align: center;
				margin: 50px 0;
			}

			.twna-calculator .download-pdf{
				border: none;
				border-radius: 48px;
				background-color: #165897;
				font-family: Gotham Rounded;
				font-size: 20px;
				font-weight: bold;
				line-height: 1.2;
				text-align: center;
				color: #ffffff;
				cursor: pointer;
				width: 70%;
			  	height: 55px;
			}

			.twna-calculator .result_footer{
				background-color: #eef4fa;
				text-align: center;
				padding-top: 20px;
				padding-bottom: 60px;
			}

			.twna-calculator .result_footer h4{
				font-family: Gotham Rounded;
				font-size: 20px;
				font-weight: 500;
				line-height: 1;
				text-align: center;
				color: #1e5895;
				margin-top: 0px;
				margin-bottom: 20px;
			}

			.twna-calculator .articles_list{
				display: flex;
				max-width: 300px;
				margin: auto;
				flex-wrap: wrap;
			}

			.twna-calculator .articles_list div{
				flex-basis: 50%;
				margin-bottom: 30px;
			}

			.twna-calculator .articles_list img{
				width: 120px;
			  	height: 120px;
			}

			.twna-calculator .articles_list p{
				width: 120px;
				font-family: Gotham Rounded;
				font-size: 15px;
				font-weight: 500;
				line-height: 1.5;
				text-align: left;
				color: #4990be;
				margin: auto;
				margin-top: 10px;
			}

			.twna-calculator .container{
				padding: 0;
			}

			@media only screen and (min-width: 320px) and (max-width: 568px) 
			and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71){
				.twna-calculator .er_text{
					font-size: 16px !important;
					top: -115px;
				}

				.twna-calculator .er_text p{
					font-size: 14px !important;
					margin: 0 25px !important;
				}

				.twna-calculator .result_header .result-header-inner div{
					bottom: 5px;
				}

				.twna-calculator .result_header h1{
					margin-bottom: 0;
				}

			}

			@media only screen and (min-width: 768px){

				.twna-calculator .container{
					padding: 0 15px;
				}

				.twna-calculator .result_header{
					background-size: 100% 310px;
					height: 260px;
					margin-bottom: 280px;
				}

				.twna-calculator .result_header h1{
					visibility: visible;
					font-family: Gotham Rounded;
					font-size: 36px;
					font-weight: bold;
					line-height: 0.83;
					color: #2c306b;
					padding: 65px;
					margin: 0;
				}

				.twna-calculator .result_header .result-header-inner div {
					bottom: 15px;
				}

			  	.twna-calculator .result_header img{
					width: 720px;
					/* top: 0; */
				}

				.twna-calculator .result_header div{
					font-size: 29.5px;
					// top: -110px;
				}

				.twna-calculator .result_header p{
					font-size: 36px;
					line-height: 1.67;
				}

				.twna-calculator .summary_note{
					font-size: 24px;
				}

				.twna-calculator .summary_list div{
					font-size: 24px;
					line-height: 3.57;
					margin: 20px 0;
				}
				  
				.twna-calculator .categories_list{
					  padding-left: 30px;
				}
				  
				.twna-calculator .price_list{
					  padding-left: 120px;
				}

				#ribbon-banner{
					max-width: 720px;
				}

				.twna-calculator .result_content{
					background-position: 0 60px;
					margin-top: 70px;
					background-size: 100% 1600px;
				}

				.twna-calculator #twnlResultPagePage3 .result_content{
					background-size: 100% 770px;
				}

				.twna-calculator .result_content_memilih { 
					background-position: center -1250px;
				}

				.twna-calculator .expert_heading{
					font-size: 45px;
					top: -125px;
					max-width: 650px;
					margin-bottom: -70px;
				}
				  
				.twna-calculator .expert_heading img{
					height: 50px;
				}

				#recommendation-family{
					width: auto;
					top: 0;
				}

				#recommendation{
					width: 720px;
					top: -220px;
					height: auto;
				}

				.twna-calculator .er_text{
					font-size: 30px;
					line-height: 1.2;
					top: -485px;
					margin-bottom: -420px;
					left: unset;
					transform: unset;
				  }

				  .twna-calculator .er_text h4{
					  margin: 5px 0;
					  font-size: 30px !important;
				  }
				  
				  .twna-calculator .er_text p{
					font-size: 24px;
					line-height: 1.2;
					font-weight: normal;
				  }

				  .twna-calculator .result_content button{
					font-size: 24px;
					border-radius: 10px;
					width: 720px;
					height: 78px;
				}

				.twna-calculator .financial_prep{
					display: flex;
					flex-direction: row;
					max-width: 1080px;
					margin: auto;
					margin-top: 50px;
				}

				.twna-calculator .financial_prep div>img{
					width: 210px;
					  height: 172px;
				}

				.twna-calculator .financial_prep h4{
					font-size: 24px !important;
				}
				
				.twna-calculator .financial_prep span{
					font-size: 24px;
				}

				.twna-calculator .financial_prep #tips{
					margin-bottom: 0;
				}

				#illustration{
					margin-top: 60px;
					width: 720px;
				}
				
				.twna-calculator .illustration-text{
					font-size: 30px;
					top: 100px;
				}

				.twna-calculator .result_illustration{
					font-size: 24px;
				}

				.twna-calculator .result_illustration p{
					font-size: 24px;
				}

				.twna-calculator .result_illustration img{
					margin: 50px 0;
					width: 720px;
				}

				.twna-calculator .notes-wrapper p{
					font-size: 28px;
				}

				.twna-calculator .download-pdf{
					font-size: 24px;
					width: 360px;
					height: 70px;
				}

				.twna-calculator .result_footer h4{
					font-size: 24px;
					margin: 1.33em 0;
				}

				.twna-calculator .articles_list{
					max-width: 1080px;
				}

				.twna-calculator .articles_list div{
					flex-basis: 25%;
					margin-bottom: 0;
				}

				.twna-calculator .articles_list img{
					width: 168.7px;
					height: 168.7px;
				}

				.twna-calculator .articles_list p{
					width: 168.7px;
					font-size: 18px;
					margin-top: 20px;
				}	
			}

			@media only screen and (min-width: 1024px){

				.twna-calculator .result_header{
					height: 280px;
					margin-bottom: 320px;
				}

				.twna-calculator .result_header h1{
					padding: 70px;
				}

				.twna-calculator .result_header img{
					width: 800px;
					/* top: 0; */
				}

				.twna-calculator .result_header .result-header-inner div {
					bottom: 20px;
				}

				.twna-calculator .result_header div{
					font-size: 26px;
				}

				#ribbon-banner{
					max-width: 860px;
				}

				.twna-calculator .result_illustration p{
					padding: 0 120px;
					font-size: 24px;
				}

				#recommendation{
					width: 800px;
					top: -230px;
					height: auto;
				}

				.twna-calculator .summary_note{
					font-size: 24px;
					padding: 0 200px;
				}

				#illustration{
					margin-top: 60px;
					width: 550px;
				}

				.twna-calculator #twnlResultPagePage3 .result_content{
					background-size: 100% 620px;
				}
				
				.twna-calculator .result_content_memilih { 
					background-position: center -1330px;
				}

				.twna-calculator .result_content button{
					font-size: 24px;
					border-radius: 10px;
					width: 815px;
					height: 78px;
				}

				.twna-calculator .result_illustration img{
					margin: 50px 0;
					width: 800px;
				}

				.twna-calculator .categories_list{
					padding-left: 110px;
				}
					
				.twna-calculator .price_list{
					padding-left: 150px;
				}

				.twna-calculator .er_text{
					font-size: 32px;
					line-height: 1.2;
					top: -515px;
					margin-bottom: -440px;
				  }

				  .twna-calculator .er_text p{
					font-size: 24px;
					line-height: 1.29;
					margin: 20px 0;
					font-weight: normal;
				  }

				  .twna-calculator .expert_heading{
					font-size: 45px;
					line-height: 1;
					top: -140px;
					max-width: 650px;
					margin-bottom: -70px;
				}
			}

			/*loginpopup*/
			.twna-calculator .login_popup{
			  width: 442px;
			  height: 554px;
			  border-radius: 10px;
			  background-color: #ffffff;
			}

			.twna-calculator .login_popup h1{
			  font-family: Gotham Rounded;
			  font-size: 22px;
			  font-weight: 500;
			  line-height: 1.09;
			  color: #2c306b;
			  text-align: center;
			  padding: 30px 100px;
			}

			.twna-calculator .login{
			  font-family: Gotham Rounded;
			  font-size: 24px;
			  font-weight: bold;
			  line-height: 1;
			  color: #2c306b;
			  margin-bottom: 20px;
			  text-align: center;
			}

			#email,
			#pwd{
			  display: block;
			  width: 325px;
			  height: 55px;
			  padding: 20px;
			  margin: 5px auto;
			  border-radius: 10px;
			  border: solid 1px #2c306b;
			  background-color: #ffffff;
			  font-family: Gotham Rounded;
			  font-size: 18px;
			  line-height: 1.33;
			  color: #2c306b;
			}

			.twna-calculator .forgot_password_wrapper{
				display:flex;
				max-width: 325px;
				margin: auto;
			}

			// /* The container */
			// .twna-calculator .container,
			// .twna-calculator .forgot_pwd {
			// 	display: block;
			// 	position: relative;
			// 	padding-left: 35px;
			// 	margin-bottom: 12px;
			// 	cursor: pointer;
			// 	font-size: 22px;
			// 	user-select: none;
			// 	flex-basis: 50%;
			// 	margin-top: 10px;
			// 	font-family: Gotham Rounded;
			// 	font-size: 18px;
			// 	font-weight: 500;
			// 	line-height: 1.33;
			// 	color: #2c306b;
			//   }
			  
			//   /* Hide the browser's default checkbox */
			//   .twna-calculator .container input {
			// 	position: absolute;
			// 	opacity: 0;
			// 	cursor: pointer;
			// 	height: 0;
			// 	width: 0;
			//   }
			  
			//   /* Create a custom checkbox */
			//   .twna-calculator .checkmark {
			// 	position: absolute;
			// 	top: 0;
			// 	left: 0;
			// 	height: 20px;
			// 	width: 20px;
			// 	background-color: #ffffff;
			// 	border: 1px solid #2c306b;
			// 	border-radius: 3px;
			//   }
			  
			//   /* Create the checkmark/indicator (hidden when not checked) */
			//   .twna-calculator .checkmark:after {
			// 	content: "";
			// 	position: absolute;
			// 	display: none;
			//   }
			  
			//   /* Show the checkmark when checked */
			//   .twna-calculator .container input:checked ~ .checkmark:after {
			// 	display: block;
			//   }
			  
			//   /* Style the checkmark/indicator */
			//   .twna-calculator .container .checkmark:after {
			// 	left: 6px;
			// 	top: 2px;
			// 	width: 5px;
			// 	height: 10px;
			// 	border: solid black;
			// 	border-width: 0 3px 3px 0;
			// 	-webkit-transform: rotate(45deg);
			// 	-ms-transform: rotate(45deg);
			// 	transform: rotate(45deg);
			//   }

			  .twna-calculator .submit_button{
				  text-align: center;
				  margin: 30px 0;
			  }

			  .twna-calculator .submit_button button{
				width: 200px;
				height: 60px;
				border-radius: 10px;
				border: solid 1px #2c306b;
				background-color: #2c306b;
				font-family: Gotham Rounded;
				font-size: 30px;
				font-weight: 500;
				line-height: 0.8;
				text-align: center;
				color: #ffffff;
			  }

			  .twna-calculator .signup_wrapper{
				font-family: Gotham Rounded;
				font-size: 18px;
				line-height: 1.33;
				text-align: center;
				color: #898989;
			  }

			  .twna-calculator .signup_wrapper span{
				font-weight: 500;
				color: #2c306b;
			  }

			/*landing*/
			.twna-calculator .main{
			    display: flex;
			    flex-direction: column-reverse;
			}

			.twna-calculator .text-wrapper h1{
				font-family: Quicksand;
			    font-size: 35px;
			    font-weight: bold;
			    line-height: 1;
			    text-align: center;
				color: #2c306b;
				margin: 10px 0;
			}

			.twna-calculator .powered-by-wrapper{
			    text-align: center;
			}

			.twna-calculator .powered-by{
				font-family: Quicksand;
			    font-size: 20px;
			    font-weight: bold;
			    line-height: 0.93;
			    text-align: center;
			    color: #838383;
			    display: inline-block;
			}

			.twna-calculator .powered-by-wrapper img{
			    width: 104px;
			    height: 22px;
			    vertical-align: baseline;
			}

			.twna-calculator .text-wrapper{
				margin: auto 20px;
			    margin-top: 120px;
			    text-align: center;
			}

			.twna-calculator .text-wrapper p{
				font-family: Quicksand;
			    font-size: 18px;
			    line-height: 1.25;
			    text-align: center;
			    color: #363636;
			    margin: 30px 0;
			}

			.twna-calculator .text-wrapper button{
			    width: 320px;
			    height: 60px;
			    border-radius: 45.5px;
			    background-color: #90b6e0;
			    margin: 20px 0;
			    border: none;
			    color: white;
			    font-size: 25px;
				letter-spacing: 1px;
				cursor: pointer;
			}

			.twna-calculator .yuk-hitung{
				font-family: Quicksand;
			    font-size: 24px;
			    font-weight: bold;
			    line-height: 1;
			    text-align: center;
			    color: #2c306b;
			}

			.twna-calculator .image-wrapper{
			    box-sizing: border-box;
			    background-color: rgba(205,222,241,0.34);
			    width: 100%;
			    height: 200px;
			    border-bottom-left-radius: 500px 500px;
			    border-bottom-right-radius: 500px 500px;
			    background-size: cover;
			}

			.twna-calculator .image-wrapper img{
			    opacity: 1;
			    display: block;
			    margin: 30px auto;
			    width: 70%;
			}

			@media only screen and (min-width:768px){

			    .twna-calculator .main{
			        flex-direction: row;
			    }
			    
			    .twna-calculator .text-wrapper{
			        flex-basis: 50%;
			        margin: auto;
			        box-sizing: border-box;
			        text-align: left;
			        max-width: 470px;
			    	margin-right: 0;
			    }
			    
			    .twna-calculator .text-wrapper h1{
			        text-align: left;
					font-size: 60px;
					margin: 0.67em 0;
			    }

			    .twna-calculator .powered-by-wrapper{
			        text-align: left;
			    }
			    
			    .twna-calculator .powered-by{
			        text-align: left;
			        font-size: 18.5px;
			    }
			    
			    .twna-calculator .powered-by-wrapper img{
			        width: 85px;
			        height: 18px;
			        object-fit: contain;
			        display: inline-block;
			    }
			    
			    .twna-calculator .text-wrapper p{
			        line-height: 1.67;
			        text-align: left;
			    }
			    
			    .twna-calculator .text-wrapper button{
					border-radius: 35px;
					margin: 0;
			        margin-top: 60px;
			        width: 378px;
			        height: 70px;
			        font-size: 30px;
			    }
			    
			    .twna-calculator .yuk-hitung{
			        font-size: 24px;
			        line-height: 2.67;
			        text-align: left;
			    }
			    
			    .twna-calculator .image-wrapper{
			        flex-basis: 50%;
			        height: 913px;
			        border-top-left-radius: 500px;
			        border-bottom-left-radius: 500px;
			        border-bottom-right-radius: 0;
			    }
			    
			    .twna-calculator .image-wrapper img{
			        opacity: 1;
			        display: block;
			        margin: 200px auto;
			        width: 450px;
			    }
			}
			
			.dana_pendidikan_page .answer-section-grey-wrapper,
			.dana_pendidikan_page .answer-section-white-wrapper{
				margin-top: 10px;
			}

			.dana_pendidikan_page .answer-section-grey-wrapper{
				padding: 10px 0;
			}

			.dana_pendidikan_page .heading-wrapper div{
				font-size: 12px;
			}

			.dana_pendidikan_page .check{
				width: 30px;
				height: 30px;
				padding: 1px;
				margin-bottom: 10px;
			}

			.dana_pendidikan_page .ticked{
				height: 20px;
    			width: 10px;
    			border-bottom: 3px solid #ffffff;
    			border-right: 3px solid #ffffff;
			}

			.dana_pendidikan_page .fees,
			.dana_pendidikan_page .fasilitas,
			.dana_pendidikan_page .kurikulum{
				font-size: 12px;
				margin-top: 10px;
			}

			h4{
				font-size: inherit !important;
			}

			/*loginpagebeforesignup*/
			#twnlLoginBeforeResult{
				height: auto;
				display: flex;
				flex-direction: column;
			}

			#twnlLoginBeforeResult .family-image{
				width: 60%;
				position: relative;
				left: 50%;
				transform: translate(-50%);
				margin-top: 50px;
			}

			#twnlLoginBeforeResult .text-wrapper{
				margin: auto 20px;
			    text-align: center;
			}

			#twnlLoginBeforeResult .text-wrapper h1{
				font-size: 35px;
				margin: 40px 0;
				font-family: Quicksand;
			    font-weight: bold;
			    line-height: 1;
			    text-align: center;
				color: #1b5793;
			}

			#twnlLoginBeforeResult .text-wrapper button{
			    width: 260px;
			    height: 50px;
			    font-size: 18px;
			    border-radius: 45.5px;
			    background-color: #90b6e0;
			    margin: 20px 0;
			    border: none;
			    color: white;
				letter-spacing: 1px;
				cursor: pointer;
			}

			#twnlLoginBeforeResult .text-wrapper p{
				margin: 20px 0;
				font-family: Quicksand;
			    font-size: 18px;
			    line-height: 1.25;
			    text-align: center;
			    color: #707070;
			}

			#twnlLoginBeforeResult .text-wrapper .login-wrapper{
				color: #677b98;
				margin-bottom: 40px;
			}

			#twnlLoginBeforeResult .text-wrapper .login-highlight{
				font-weight: bold;
				font-size: 20px;
				cursor: pointer;
			}

			@media only screen and (min-width: 768px){
				#twnlLoginBeforeResult{
					height: 560px;
					flex-direction: row;
				}

				#twnlLoginBeforeResult .family-image-wrapper{
					flex-basis: 50%;
				}

				#twnlLoginBeforeResult .text-wrapper{
					flex-basis: 50%;
			        margin: auto;
			        box-sizing: border-box;
			        text-align: left;
			        max-width: 470px;
			    	margin-right: 0;
				}

				#twnlLoginBeforeResult .text-wrapper h1{
					text-align: left;
					font-size: 40px;
					margin: 0.67em 0;
				}

				#twnlLoginBeforeResult .text-wrapper p{
					line-height: 1.67;
			        text-align: left;
				}

				#twnlLoginBeforeResult .text-wrapper button{
					border-radius: 35px;
					margin: 10px 0;
				}

				#twnlLoginBeforeResult .family-image{
					width: 90%;
					height: 350px;
					top: 50%;
					left: unset;
					transform: translate(0,-50%);
					margin-top: 0px;
				}

				#twnlLoginBeforeResult .text-wrapper .login-highlight{
					font-weight: bold;
					font-size: 20px;
				}
			}

			@media only screen and (min-width: 1024px){
				#twnlLoginBeforeResult .family-image{
					width: 80%;
					height: 400px;
				}
			}

		`)
	},

	render: function() {
	    let head = document.head || document.getElementsByTagName('head')[0];
	    let style = document.createElement('style');

		head.appendChild(style);

		style.type = 'text/css';
		if (style.styleSheet){
		  // This is required for IE8 and below.
		  style.styleSheet.cssText = this.css();
		} else {
		  style.appendChild(document.createTextNode(this.css()));
		}
	}
}

const twnlObj = {
	twnlBabyClothesNeeds: {
		state: {
			value: {}
		},
		title: 'Kebutuhan Baju Bayi',
		desc: 'Ini adalah kebutuhan awal yang si Kecil wajib dimiliki. Mama dan Papa bisa menyesuaikan jumlah yang diinginkan sesuai kebutuhannya.',
		questions: [
			{
				title: 'Lemari pakaian bayi', 
				desc: '1 Buah', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 500000
					}, 
					{
						text: 'Medium',
						value: 2340000
					}, 
					{
						text: 'High',
						value: 4000000
					}
				]
			},
			{ 
				title: 'Kaos kaki dan sarung tangan', 
				desc: '1 Lusin', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 120000
					}, 
					{
						text: 'Medium',
						value: 300000
					}, 
					{
						text: 'High',
						value: 492000
					}
				]
			},
			{ 
				title: 'Kaos dalam', 
				desc: '6 Buah', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 90000
					}, 
					{
						text: 'Medium',
						value: 150000
					}, 
					{
						text: 'High',
						value: 300000
					}
				]
			},
			{ 
				title: 'Baju bayi tanpa lengan', 
				desc: '1 Lusin', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 150000
					}, 
					{
						text: 'Medium',
						value: 520000
					}, 
					{
						text: 'High',
						value: 1400000
					}
				]
			},
			{
				title: 'Baju bayi lengan pendek', 
				desc: '1 Lusin', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 80000
					}, 
					{
						text: 'Medium',
						value: 600000
					}, 
					{
						text: 'High',
						value: 1040000
					}
				]
			},
			{ 
				title: 'Baju bayi lengan panjang', 
				desc: '1 Lusin', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 240000
					}, 
					{
						text: 'Medium',
						value: 480000
					}, 
					{
						text: 'High',
						value: 1032000
					}
				]
			},
			{ 
				title: 'Celana pendek', 
				desc: '1 Lusin', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 360000
					}, 
					{
						text: 'Medium',
						value: 1620000
					}, 
					{
						text: 'High',
						value: 3120000
					}
				]
			},
			{ 
				title: 'Celana panjang', 
				desc: '1 Lusin', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 600000
					}, 
					{
						text: 'Medium',
						value: 1500000
					}, 
					{
						text: 'High',
						value: 4800000
					}
				]
			},
			{
				title: 'Jumpsuit lengan pendek', 
				desc: '6 Buah', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 70000
					}, 
					{
						text: 'Medium',
						value: 120000
					}, 
					{
						text: 'High',
						value: 230000
					}
				]
			},
			{ 
				title: 'Jumpsuit lengan panjang', 
				desc: '6 Buah', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 80000
					}, 
					{
						text: 'Medium',
						value: 135000
					}, 
					{
						text: 'High',
						value: 479000
					}
				]
			},
			{ 
				title: 'Baju hangat/sweater/jaket', 
				desc: '1 Buah', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 100000
					}, 
					{
						text: 'Medium',
						value: 350000
					}, 
					{
						text: 'High',
						value: 700000
					}
				]
			},
			{ 
				title: 'Diapers', 
				desc: '2 Box', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 168800
					}, 
					{
						text: 'Medium',
						value: 214000
					}, 
					{
						text: 'High',
						value: 300000
					}
				]
			},
			{
				title: 'Popok kain', 
				desc: '2 Lusin', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 100000
					}, 
					{
						text: 'Medium',
						value: 200000
					}, 
					{
						text: 'High',
						value: 720000
					}
				]
			},
			{ 
				title: 'Topi', 
				desc: '1 Buah', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 15000
					}, 
					{
						text: 'Medium',
						value: 65000
					}, 
					{
						text: 'High',
						value: 139000
					}
				]
			},
			{ 
				title: 'Keranjang pakaian kotor', 
				desc: '1 Buah', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 28000
					}, 
					{
						text: 'Medium',
						value: 80000
					}, 
					{
						text: 'High',
						value: 105000
					}
				]
			},
			{ 
				title: 'Perlengkapan cuci baju bayi / detergen', 
				desc: '1 Pouch', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 20000
					}, 
					{
						text: 'Medium',
						value: 29000
					}, 
					{
						text: 'High',
						value: 35000
					}
				]
			},
			{
				title: 'Container', 
				desc: '1 Buah', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 42000
					}, 
					{
						text: 'Medium',
						value: 120000
					}, 
					{
						text: 'High',
						value: 300000
					}
				]
			},
			{ 
				title: 'Sapu tangan', 
				desc: '1 Set', 
				type: 'normal', 
				opt: [
					{
						text: 'Low',
						value: 10000
					}, 
					{
						text: 'Medium',
						value: 25000
					}, 
					{
						text: 'High',
						value: 45000
					}
				]
			}
		]
	},
	twnlKebutuhanAlatMandiBayi: {
		state: {
			value: {}
		},
		title: 'Kebutuhan Alat Mandi Bayi',
		desc: 'Lengkapi kebutuhan mandi khusus si Kecil sesuai kebutuhan kulitnya yang lembut dan memerlukan formula khusus.',
		questions: [
			{
				title: 'Bak mandi',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 55000
					},
					{
						text: 'Medium',
						value: 225000
					},
					{
						text: 'High',
						value: 700000 
					}
				]
			},
			{
				title: 'Waslap',
				desc: '3 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 15000
					},
					{
						text: 'Medium',
						value: 30000
					},
					{
						text: 'High',
						value: 45000 
					}
				]
			},
			{
				title: 'Handuk',
				desc: '2 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 68000
					},
					{
						text: 'Medium',
						value: 190000
					},
					{
						text: 'High',
						value: 399000 
					}
				]
			},
			{
				title: 'Sabun+shampoo (top to toe)',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 90000
					},
					{
						text: 'Medium',
						value: 150000
					},
					{
						text: 'High',
						value: 250000 
					}
				]
			},
			{
				title: 'Body lotion',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 199000
					},
					{
						text: 'Medium',
						value: 219000
					},
					{
						text: 'High',
						value: 309000 
					}
				]
			},
			{
				title: 'Diaper rash',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 12900
					},
					{
						text: 'Medium',
						value: 30000
					},
					{
						text: 'High',
						value: 155000 
					}
				]
			},
			{
				title: 'Baby oil',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 12000
					},
					{
						text: 'Medium',
						value: 20000
					},
					{
						text: 'High',
						value: 100000 
					}
				]
			},
			{
				title: 'Minyak telon',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 12000
					},
					{
						text: 'Medium',
						value: 20000
					},
					{
						text: 'High',
						value: 35000 
					}
				]
			},
			{
				title: 'Perlak',
				desc: '2 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 57500
					},
					{
						text: 'Medium',
						value: 219000
					},
					{
						text: 'High',
						value: 499000 
					}
				]
			},
			{
				title: 'Perlak pangku',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 15000
					},
					{
						text: 'Medium',
						value: 80000
					},
					{
						text: 'High',
						value: 135000 
					}
				]
			},
			{
				title: 'Tissue basah',
				desc: '2 Box',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 15000
					},
					{
						text: 'Medium',
						value: 35000
					},
					{
						text: 'High',
						value: 80000 
					}
				]
			},
			{
				title: 'Kapas (cotton ball)',
				desc: '1 Lusin',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 6000
					},
					{
						text: 'Medium',
						value: 11000
					},
					{
						text: 'High',
						value: 70000 
					}
				]
			},
			{
				title: 'Sikat lidah',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 13000
					},
					{
						text: 'Medium',
						value: 25000
					},
					{
						text: 'High',
						value: 55000 
					}
				]
			},
			{
				title: 'Anti slip bak mandi',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 52000
					},
					{
						text: 'Medium',
						value: 60000
					},
					{
						text: 'High',
						value: 110000 
					}
				]
			},
			{
				title: 'Changing table',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 1600000
					},
					{
						text: 'Medium',
						value: 5500000
					},
					{
						text: 'High',
						value: 12000000 
					}
				]
			},
		]
	},
	twnlPerlengkapanTidurBayi: {
		state: {
			value: {}
		},
		title: 'Perlengkapan Tidur Bayi',
		desc: 'Kenyamanan adalah nomor satu, pilih bahan serta rangka yang nyaman, agar waktu tidurnya selalu maksimal.',
		questions: [
			{
				title: 'Tempat tidur bayi (dengan kelambu)',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 1700000
					},
					{
						text: 'Medium',
						value: 6000000
					},
					{
						text: 'High',
						value: 11000000
					}
				]
			},
			{
				title: 'Kasur bayi',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 760000
					},
					{
						text: 'Medium',
						value: 1460000
					},
					{
						text: 'High',
						value: 4000000
					}
				]
			},
			{
				title: 'Bantal guling',
				desc: '2 Pasang',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 69000
					},
					{
						text: 'Medium',
						value: 140000
					},
					{
						text: 'High',
						value: 400000
					}
				]
			},
			{
				title: 'Bouncer',
				desc: '1 Buah',
				type: 'drop' ,
				drop: [
					{
						text: 'Beli',
						value: 'buy',
						optType: 'normal',
						opt: [
							{
								text: 'Low',
								value: 195000
							},
							{
								text: 'Medium',
								value: 325000
							},
							{
								text: 'High',
								value: 1400000
							}
						]
					},
					{
						text: 'Sewa',
						value: 'rent',
						optType: 'drop',
						opt: [
							{
								text: '1 bulan - IDR 200,000 - 250,000',
								value: 250000
							},
							{
								text: '2 bulan - IDR 400,000 - 475,000',
								value: 475000
							},
							{
								text: '3 bulan - IDR 600,000 - 675,000',
								value: 675000
							}
						]
					}
				]
			},
			{
				title: 'Kain bedong',
				desc: '1 Lusin',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 25000
					},
					{
						text: 'Medium',
						value: 80000
					},
					{
						text: 'High',
						value: 170000
					}
				]
			},
			{
				title: 'Sprei',
				desc: '3 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 90000
					},
					{
						text: 'Medium',
						value: 400000
					},
					{
						text: 'High',
						value: 800000
					}
				]
			},
			{
				title: 'Selimut',
				desc: '2 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 220000
					},
					{
						text: 'Medium',
						value: 399000
					},
					{
						text: 'High',
						value: 600000
					}
				]
			},
			{
				title: 'Stiker nyamuk',
				desc: '1 Box',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 50000
					},
					{
						text: 'Medium',
						value: 157000
					},
					{
						text: 'High',
						value: 227000
					}
				]
			},
			{
				title: 'Bedrail',
				desc: '1 Buah',
				type: 'drop',
				drop: [
					{
						text: 'Beli',
						value: 'buy',
						optType: 'normal',
						opt: [
							{
								text: 'Low',
								value: 2500000
							},
							{
								text: 'Medium',
								value: 3500000
							},
							{
								text: 'High',
								value: 6000000
							}
						]
					},
					{
						text: 'Sewa',
						value: 'rent',
						optType: 'drop',
						opt: [
							{
								text: '2 minggu - IDR 70,000 - 250,000',
								value: 250000
							},
							{
								text: '4 minggu - IDR 260,000 - 400,000',
								value: 400000
							},
							{
								text: '8 minggu - IDR 450,000 - 750,000',
								value: 750000
							}
						]
					}
				]
			}
		]
	},
	twnlPelengkapanKesehatanSiKecil: {
		state: {
			value: {}
		},
		title: 'Pelengkapan Kesehatan si Kecil',
		desc: 'Mama dan Papa perlu menyiapkan beberapa perlengkapan dasar untuk menunjang kesehatan si Kecil.',
		questions:[
			{
				title: 'Gunting kuku (manicure set plus sisir)',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 45000
					},
					{
						text: 'Medium',
						value: 120000
					},
					{
						text: 'High',
						value: 400000
					}
				]
			},
			{
				title: 'Alkohol 70%',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 12500
					},
					{
						text: 'Medium',
						value: 30000
					},
					{
						text: 'High',
						value: 100000
					}
				]
			},
			{
				title: 'Kain kassa',
				desc: '1 Box',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 6000
					},
					{
						text: 'Medium',
						value: 20000
					},
					{
						text: 'High',
						value: 30000
					}
				]
			},
			{
				title: 'Termometer digital',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 45000
					},
					{
						text: 'Medium',
						value: 170000
					},
					{
						text: 'High',
						value: 375000
					}
				]
			},
			{
				title: 'Minyak kayu putih',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 18000
					},
					{
						text: 'Medium',
						value: 38000
					},
					{
						text: 'High',
						value: 600000
					}
				]
			},
			{
				title: 'Cotton bud',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 3000
					},
					{
						text: 'Medium',
						value: 8000
					},
					{
						text: 'High',
						value: 11000
					}
				]
			},
			{
				title: 'Sedotan ingus',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 45000
					},
					{
						text: 'Medium',
						value: 70000
					},
					{
						text: 'High',
						value: 160000
					}
				]
			},
			{
				title: 'Minyak kemiri',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 25000
					},
					{
						text: 'Medium',
						value: 85000
					},
					{
						text: 'High',
						value: 160000
					}
				]
			},
			{
				title: 'Cairan antiseptik',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 15000
					},
					{
						text: 'Medium',
						value: 35000
					},
					{
						text: 'High',
						value: 70000
					}
				]
			},
		]
	},
	twnlPerlengkapanMakanBayi: {
		state: {
			value: {}
		},
		title: 'Perlengkapan Makan Bayi',
		desc: 'Dengan alat makan terbuat dari bahan yang aman, acara makan si Kecil selalu terjaga dan tambah menyenangkan.',
		questions:[
			{
				title: 'Botol ASI kaca',
				desc: '6 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 7200
					},
					{
						text: 'Medium',
						value: 23000
					},
					{
						text: 'High',
						value: 45000
					}
				]
			},
			{
				title: 'Plastik ASI',
				desc: '1 Box isi 30',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 30000
					},
					{
						text: 'Medium',
						value: 40000
					},
					{
						text: 'High',
						value: 50000
					}
				]
			},
			{
				title: 'Botol (plastik) dan dot',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 20000
					},
					{
						text: 'Medium',
						value: 55000
					},
					{
						text: 'High',
						value: 77000
					}
				]
			},
			{
				title: 'Termos air panas',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 100000
					},
					{
						text: 'Medium',
						value: 155000
					},
					{
						text: 'High',
						value: 200000
					}
				]
			},
			{
				title: 'Peralatan pembersih botol / sikat',
				desc: '1 Set',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 10000
					},
					{
						text: 'Medium',
						value: 35000
					},
					{
						text: 'High',
						value: 75000
					}
				]
			},
			{
				title: 'Tutup dada untuk makan/baby bibs kain',
				desc: '3 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 13000
					},
					{
						text: 'Medium',
						value: 180000
					},
					{
						text: 'High',
						value: 390000
					}
				]
			},
			{
				title: 'Sterilizer Botol',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 300000
					},
					{
						text: 'Medium',
						value: 500000
					},
					{
						text: 'High',
						value: 850000
					}
				]
			},
			{
				title: 'Sterilizer UV',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 1200000
					},
					{
						text: 'Medium',
						value: 3000000
					},
					{
						text: 'High',
						value: 4000000
					}
				]
			},
			{
				title: 'Freezer',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 550000
					},
					{
						text: 'Medium',
						value: 1000000
					},
					{
						text: 'High',
						value: 2500000
					}
				]
			},
			{
				title: 'Kursi makan bayi',
				desc: '1 Buah',
				type: 'drop' ,
				drop: [
					{
						text: 'Beli',
						value: 'buy',
						optType: 'normal',
						opt: [
							{
								text: 'Low',
								value: 150000
							},
							{
								text: 'Medium',
								value: 500000
							},
							{
								text: 'High',
								value: 1500000
							}
						]
					},
					{
						text: 'Sewa',
						value: 'rent',
						optType: 'drop',
						opt: [
							{
								text: '2 minggu - IDR 70,000 - 110,000',
								value: 110000
							},
							{
								text: '4 minggu - IDR 120,000 - 170,000',
								value: 170000
							},
							{
								text: '8 minggu - IDR 180,000 - 300,000',
								value: 300000
							}
						]
					}
				]
			},
			{
				title: 'Pompa ASI',
				desc: '1 Set',
				type: 'drop' ,
				drop: [
					{
						text: 'Beli',
						value: 'buy',
						optType: 'normal',
						opt: [
							{
								text: 'Low',
								value: 1500000
							},
							{
								text: 'Medium',
								value: 1800000
							},
							{
								text: 'High',
								value: 2000000
							}
						]
					},
					{
						text: 'Sewa',
						value: 'rent',
						optType: 'drop',
						opt: [
							{
								text: '1 minggu - IDR 100,000 - 170,000',
								value: 170000
							},
							{
								text: '1 bulan - IDR 300,000 - 400,000',
								value: 400000
							}
						]
					}
				]
			},
			{
				title: 'Baby liquid cleanser',
				desc: '',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 15000
					},
					{
						text: 'Medium',
						value: 60000
					},
					{
						text: 'High',
						value: 150000
					}
				]
			},
		]
	},
	twnlBabyActivity: {
		state: {
			value: {}
		},
		title: 'Baby Activity',
		desc: 'Merangsang tumbuh kembang dan sosialisasinya, si Kecil membutuhkan aktivitas yang mendukung.',
		questions:[
			{
				title: 'Playground',
				desc: '1 per visit, per hours',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 70000
					},
					{
						text: 'Medium',
						value: 150000
					},
					{
						text: 'High',
						value: 300000
					}
				]
			},
			{
				title: 'Yoga',
				desc: '1 per month',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 200000
					},
					{
						text: 'Medium',
						value: 575000
					},
					{
						text: 'High',
						value: 1000000
					}
				]
			},
			{
				title: 'Swimming class',
				desc: '1 per month (8 sessions)',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 1050000
					},
					{
						text: 'Medium',
						value: 2000000
					},
					{
						text: 'High',
						value: 2950000
					}
				]
			},
			{
				title: 'Baby spa',
				desc: '1 per session (60 mins)',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 50000
					},
					{
						text: 'Medium',
						value: 175000
					},
					{
						text: 'High',
						value: 275000
					}
				]
			},
			{
				title: 'Playmat',
				desc: '1 Buah',
				type: 'drop' ,
				drop: [
					{
						text: 'Beli',
						value: 'buy',
						optType: 'normal',
						opt: [
							{
								text: 'Low',
								value: 1500000
							},
							{
								text: 'Medium',
								value: 4500000
							},
							{
								text: 'High',
								value: 5000000
							}
						]
					},
					{
						text: 'Sewa',
						value: 'rent',
						optType: 'drop',
						opt: [
							{
								text: '30 hari - IDR 300,000 - 350,000',
								value: 350000
							},
							{
								text: '60 hari - IDR 500,000 - 650,000',
								value: 650000
							}
						]
					}
				]
			},
			{
				title: 'Nanny',
				desc: '1 Orang',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 1500000
					},
					{
						text: 'Medium',
						value: 3500000
					},
					{
						text: 'High',
						value: 5000000
					}
				]
			},
			{
				title: 'Day care',
				desc: '6 bulan ke atas',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 2000000
					},
					{
						text: 'Medium',
						value: 3000000
					},
					{
						text: 'High',
						value: 4500000
					}
				]
			}
		]
	},
	twnlPendidikan: {
		title: 'Dana Pendidikan',
		desc: 'Pendidikan adalah hal yang sangat penting dipersiapkan Mama dan Papa untuk masa depan si Kecil yang cemerlang.',
	},
	twnlHealth: {
		state: {
			value: {}
		},
		title: 'Imunisasi Anak',
		desc: 'Untuk menjaga kesehatan si Kecil dan Mama,sebaiknya mempersiapkan kebutuhan finansial imunisasi sejak dini. Berikut ini adalah estimasi biaya daftar imunisasinya.',
		questions:[
			{
				title: 'Tuberkulosis',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 BCG',
						rate: '200,000'
					}
				],
				value: 200000
			},
	        {
				title: 'Hepatitis B',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Hepatitis B anak',
						rate: '120,000'
					},
					{
						text: '1 Engerix B anak',
						rate: '130,000'
					},
					{
						text: '1 Euvax B anak',
						rate: '120,000'
					},
				],
				value: 130000
			},
			{
				title: 'Polio',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Polio(Sabin)',
						rate: '87,000'
					},
					{
						text: '1 Imovax Polio',
						rate: '190,000'
					},
				],
				value: 277000
			},

	        {
				title: 'Difteri, Pertusis, Tetanus',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Jerap DpaT',
						rate: '141,000'
					},
					{
						text: '1 Infanrix',
						rate: '330,000'
					},
					{
						text: '1 Tripacel',
						rate: '440,000'
					},
				],
				value: 911000
			},

	        {
				title: 'Campak',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Campak',
						rate: '155,000'
					},
				],
				value: 155000
			},

	        {
				title: 'HIB',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Hiberix',
						rate: '250,000'
					},
					{
						text: '1 Act-Hib',
						rate: '290,000'
					},
				],
				value: 540000
			},

	        {
				title: 'Difteri, Pertusis, Tetanus, Polio',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Tetraxim',
						rate: '335,000'
					},
				],
				value: 335000
			},

	        {
				title: 'Difteri, Pertusis, Tetanus, Hib',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Infanrix-Hib',
						rate: '435,000'
					},
				],
				value: 435000
			},

	        {
				title: 'Difteri, Pertusis, Tetanus, Hib, Polio',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Pediacel',
						rate: '850,000'
					},
					{
						text: '1 Infanrix-Hib-IPV',
						rate: '620,000'
					},
				],
				value: 1470000
			},

	        {
				title: 'Difteri, Pertusis, Tetanus, Hib, Hepatitis B',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Infarix hexa',
						rate: '750,000'
					},
					{
						text: '1 Hexaxim',
						rate: '990,000'
					},
				],
				value: 1740000
			},

	        {
				title: 'Tetanus, Difteri (dosis kecil)',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Bio Td',
						rate: '120,000'
					},
				],
				value: 120000
			},

	        {
				title: 'Tetanus',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Bio TT',
						rate: '70,000'
					},
					{
						text: '1 Jerap TT',
						rate: '150,000'
					},
				],
				value: 220000
			},

	        {
				title: 'Tetanus, Difteri (dosis kecil), Pertusus (dosis kecil)',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Boostrix',
						rate: '350,000'
					},
				],
				value: 350000
			},

	        {
				title: 'Rotavirus (1 strain)',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Rotarix',
						rate: '310,000'
					},
				],
				value: 310000
			},

	        {
				title: 'Rotavirus (5 strain)',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Rotateq',
						rate: '280,000'
					},
				],
				value: 280000
			},

	        {
				title: 'Pneumonia (PCV 10)',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Synflorix',
						rate: '550,000'
					},
				],
				value: 550000
			},

	        {
				title: 'Pneumonia (PCV 13)',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Prevnar 13',
						rate: '870,000'
					},
				],
				value: 870000
			},

	        {
				title: 'Pneumonia (PPSV 23)',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Pneumo 23',
						rate: '335,000'
					},
				],
				value: 335000
			},

	        {
				title: 'Hepatitis A',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Havrix anak',
						rate: '350,000'
					},
					{
						text: '1 Avaxim anak',
						rate: '450,000'
					},
				],
				value: 450000
			},

	        {
				title: 'Hepatitis A, Hepatitis B',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Twinrix',
						rate: '390,000'
					},
				],
				value: 390000
			},

	        {
				title: 'Influenza (3 strain)',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Vaxigrip anak',
						rate: '200,000'
					},
				],
				value: 200000
			},

	        {
				title: 'Influenza (4 strain)',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Fluquadri anak',
						rate: '290,000'
					},
				],
				value: 290000
			},

	        {
				title: 'Meningitis (MPSV 4)',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Mencevax ACWY',
						rate: '360,000'
					},
				],
				value: 360000
			},

	        {
				title: 'Meningitis (MCV 4)',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Menveo',
						rate: '620,000'
					},
				],
				value: 620000
			},

	        {
				title: 'Tifoid',
				desc: '',
				type: 'single',
				medicines: [
					{	
						text: '1 Typherix',
						rate: '190,000'
					},
					{
						text: '1 Typhim-vi',
						rate: '270,000'
					},
				],
				value: 270000
			},
			
	        {
				title: 'Tifoid, Hepatitis A',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Vivaxim',
						rate: '760,000'
					},
				],
				value: 760000
			},

	        {
				title: 'Cacar air/Vericella',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Varilrix',
						rate: '520,000'
					},
					{
						text: '1 Varivax',
						rate: '630,000'
					},
				],
				value: 630000
			},

	        {
				title: 'HPV/Kanker serviks (2 strain)',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Cervarix',
						rate: '730,000'
					},
				],
				value: 730000
			},

	        {
				title: 'HPV/Kanker serviks dan kutil kelamin (4 strain)',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Gardasil',
						rate: '920,000'
					},
				],
				value: 920000
			},

	        {
				title: 'Rabies',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Verorab',
						rate: '280,000'
					},
				],
				value: 280000
			},

	        {
				title: 'Japanese encephalitis',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Imojev',
						rate: '450,000'
					},
				],
				value: 450000
			},

	        {
				title: 'Demam berdarah/Dengue',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Dengvaxia',
						rate: '1,150,000'
					},
				],
				value: 1150000
			},

	        {
				title: 'Gondong, Campak, Rubelle',
				desc: '',
				type: 'single',
				medicines: [
					{
						text: '1 Trimovax',
						rate: '205,000'
					},
				],
				value: 205000
			}
		]
	},
	twnlImageChoice: {
		state: {
			value: {}
		},
		title: 'Kebutuhan Berpergian Bayi',
		desc: 'Mama dan Papa bisa memilih perangkat apa yang diperlukan untuk menunjang mobilitas bersama si Kecil.',
		questions:[
			{

				title: 'Gendongan bayi/babywrap',
				desc: '2 Buah',
				type: 'drop',
				drop: [
					{
						text: 'Beli',
						value: 'buy',
						optType: 'normal',
						opt: [
							{
								img: 'images/gendongan-1.jpg',
								value: 250000
							},
							{
								img: 'images/gendongan-2.jpg',
								value: 100000000
							},
							{
								img: 'images/gendongan-3.jpeg',
								value: 2000000
							}
						]
					},
					{
						text: 'Sewa',
						value: 'rent',
						optType: 'drop',
						opt: [
							{
								text: '2 minggu - IDR 150,000 - 175,000',
								value: 175000
							},
							{
								text: '4 minggu - IDR 200,000 - 250,000',
								value: 250000
							},
							{
								text: '8 minggu - IDR 260,000 - 300,000',
								value: 300000
							},
							{
								text: '8 minggu - IDR 325,000 - 400,000',
								value: 400000
							}
						]
					}
				]
			},
			{

				title: 'Stroller',
				desc: '1 Buah',
				type: 'drop',
				drop: [
					{
						text: 'Beli',
						value: 'buy',
						optType: 'normal',
						opt: [
							{
								img: 'images/stroller-1.jpg',
								value: 1700000
							},
							{
								img: 'images/stroller-2.jpg',
								value: 6000000
							},
							{
								img: 'images/stroller-3.jpeg',
								value: 20000000
							}
						]
					},
					{
						text: 'Sewa',
						value: 'rent',
						optType: 'drop',
						opt: [
							{
								text: '2 minggu - IDR 200,000 - 230,000',
								value: 230000
							},
							{
								text: '4 minggu - IDR 300,000 - 350,000',
								value: 350000
							},
							{
								text: '8 minggu - IDR 400,000 - 470,000',
								value: 470000
							},
							{
								text: '8 minggu - IDR 500,000 - 590,000',
								value: 590000
							}
						]
					}
				]
			},
			{

				title: 'Tas bayi',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						img: 'images/tas-bayi-1.jpg',
						value: 300000
					},
					{
						img: 'images/tas-bayi-2.jpg',
						value: 1000000
					},
					{
						img: 'images/tas-bayi-3.jpg',
						value: 3000000
					}
				]
			},
			{

				title: 'Mainan bayi',
				desc: '1 Set',
				type: 'normal',
				opt: [
					{
						img: 'images/mainan-bayi-1.jpg',
						value: 60000
					},
					{
						img: 'images/mainan-bayi-2.jpg',
						value: 300000
					},
					{
						img: 'images/mainan-bayi-3.jpg',
						value: 1000000
					}
				]
			},
			{

				title: 'Car Seat',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						img: 'images/car-seat-1.jpg',
						value: 500000
					},
					{
						img: 'images/car-seat-2.jpg',
						value: 800000
					},
					{
						img: 'images/car-seat-3.jpg',
						value: 1700000
					}
				]
			},
			{

				title: 'Teether',
				desc: '',
				type: 'normal',
				opt: [
					{
						img: 'images/teether-1.jpg',
						value: 85000
					},
					{
						img: 'images/teether-2.jpg',
						value: 100000
					},
					{
						img: 'images/teether-3.jpg',
						value: 300000
					}
				]
			}
		]
	},
	twnlBiayaPersalinan: {
		state: {
			value: {}
		},
		title: 'Biaya Persalinan',
		desc: 'Persiapkan rencana kelahiran dengan menyiapkan finansial untuk estimasi biaya persalinan.',
		questions:[
			{
				title: 'Persalinan',
				desc: '1',
				type: 'drop',
				drop: [
					{
						text: 'Caesar',
						value: 'caesar',
						optType: 'normal',
						opt: [
							{
								text: 'Low',
								value: 25000000
							},
							{
								text: 'Medium',
								value: 45000000
							},
							{
								text: 'High',
								value: 65000000
							}
						]
					},
					{
						text: 'Normal',
						value: 'normal',
						optType: 'normal',
						opt: [
							{
								text: 'Low',
								value: 10000000
							},
							{
								text: 'Medium',
								value: 25000000
							},
							{
								text: 'High',
								value: 40000000
							}
						]
					},
				]
			},
			
			{
				title: 'Dola',
				desc: '1',
				type: 'normal',
				opt: [
					{
						text: 'Medium',
						value: 3000000
					},
					{
						text: 'High',
						value: 5500000
					}
				]
			},

			{
				title: 'Maternity shoot / Newborn shoot',
				desc: '1',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 2000000
					},
					{
						text: 'Medium',
						value: 8500000
					},
					{
						text: 'High',
						value: 16000000
					}
				]
			},

			{
				title: 'Delivery moment photoshoot and video',
				desc: '1',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 2500000
					},
					{
						text: 'Medium',
						value: 3500000
					},
					{
						text: 'High',
						value: 6100000
					}
				]
			},

			{
				title: 'Cord stem cells',
				desc: '1',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 2086000
					},
					{
						text: 'Medium',
						value: 3906000
					}
				]
			},
		]
	},
	twnlPerlengkapanMama: {
		state: {
			value: {}
		},
		title: 'Perlengkapan Mama',
		desc: 'Bukan hanya si Kecil saja yang memerlukan perlengkapan khusus, Mama juga. Yuk pilih perlengkapan mana saja yang Mama butuhkan?',
		questions:[
			{
				title: 'Gurita/korset untuk Mama',
				desc: '3 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 20000
					},
					{
						text: 'Medium',
						value: 60000
					},
					{
						text: 'High',
						value: 200000
					}
				]
			},
			
			{
				title: 'Pembalut melahirkan',
				desc: '2 Box',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 27500
					},
					{
						text: 'Medium',
						value: 46800
					},
					{
						text: 'High',
						value: 86000
					}
				]
			},

			{
				title: 'Bantal menyusui',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 60000
					},
					{
						text: 'Medium',
						value: 165000
					},
					{
						text: 'High',
						value: 250000
					}
				]
			},

			{
				title: 'Tas pompa ASI',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 200000
					},
					{
						text: 'Medium',
						value: 300000
					},
					{
						text: 'High',
						value: 500000
					}
				]
			},

			{
				title: 'Kain penutup menyusui',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 85000
					},
					{
						text: 'Medium',
						value: 130000
					},
					{
						text: 'High',
						value: 300000
					}
				]
			},

			{
				title: 'Bra menyusui',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 80000
					},
					{
						text: 'Medium',
						value: 325000
					},
					{
						text: 'High',
						value: 650000
					}
				]
			},

			{
				title: 'Breast pad',
				desc: '2 Box',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 50000
					},
					{
						text: 'Medium',
						value: 73000
					},
					{
						text: 'High',
						value: 126000
					}
				]
			},

			{
				title: 'Breast pad',
				desc: '1 Box',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 28500
					},
					{
						text: 'Medium',
						value: 110000
					},
					{
						text: 'High',
						value: 168000
					}
				]
			},

			{
				title: 'Nipple cream',
				desc: '1 Buah',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 60000
					},
					{
						text: 'Medium',
						value: 80000
					},
					{
						text: 'High',
						value: 190000
					}
				]
			},
		]
	},
	twnlBiayaLain: {
		state: {
			value: {}
		},
		title: 'Biaya lain-lain',
		desc: 'Mama dan Papa pernah memperkirakan biaya tidak terduga saat mempersiapkan finansial si Kecil, apa saja?',
		questions:[
			{
				title: 'Biaya budaya (akekah, potong rambut, pengesahan nama)',
				desc: 'Per visit',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 5000000
					},
					{
						text: 'Medium',
						value: 8000000
					},
					{
						text: 'High',
						value: 10000000
					}
				]
			},
			
			{
				title: 'Kelas laktasi',
				desc: 'Per visit',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 150000
					},
					{
						text: 'Medium',
						value: 250000
					},
					{
						text: 'High',
						value: 350000
					}
				]
			},

			{
				title: 'Kelas hypnobirthing',
				desc: 'Per visit',
				type: 'normal',
				opt: [
					{
						text: 'Medium',
						value: 1500000
					}
				]
			},

			{
				title: 'Kelas senam hamil',
				desc: 'Per visit',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 100000
					}
				]
			},

			{
				title: 'Prenatal yoga',
				desc: 'Per visit',
				type: 'normal',
				opt: [
					{
						text: 'Low',
						value: 150000
					}
				]
			},

			{
				title: 'Postportum class',
				desc: 'Per visit',
				type: 'normal',
				opt: [
					{
						text: 'Medium',
						value: 1500000
					},
					{
						text: 'High',
						value: 4500000
					}
				]
			},
		]
	}
}

const twnlStateHandler = {
	updateSelection: function(mainKey, key, value) {
		if(mainKey == 'twnlHealth') {
			if(twnlObj[mainKey].state.value[key] != value)
			{
				twnlObj[mainKey].state.value[key] = value;
			}
			else {
				twnlObj[mainKey].state.value[key] = "";
			}
		}
		else {
			if(twnlObj[mainKey].state.value[key] != value)
			{
				twnlObj[mainKey].state.value[key] = value;	
			}
			else {
				twnlObj[mainKey].state.value[key] = "";
			}	
		}

		twnlMain.render();
	},

	handleDropdownSelection: function(selected, mainKey, key) {
		twnlObj[mainKey].state.value[key] = selected.value;
		twnlMain.render();
	},

	setDropKey: function(mainKey, key, value) {
		twnlObj[mainKey].state[key] = value;
	},

	handleValueTypeChage: function(selected, mainKey, key) {
		twnlObj[mainKey].state[key+'ValueType'] = selected.value;
		twnlObj[mainKey].state.value[key] = "";
		
		twnlMain.render();
	},

	slideChange: function(clicked, id, slide, length) {
		
		if(slide == 'next') {
			let isShow = "";
			for(let i = 1; i <= length; i++) {
				if(document.getElementById(id).childNodes[i].classList.contains('show-slide')) {
					isShow = i + 1;
				}
				document.getElementById(id).childNodes[i].classList.remove('show-slide');
				document.getElementById(id).childNodes[i].classList.add('hide-slide');
				
				if(isShow == i) {
					document.getElementById(id).childNodes[i].classList.add('show-slide');
					document.getElementById(id).childNodes[i].classList.remove('hide-slide');
				}	
			}

			if(isShow > length) {
				document.getElementById(id).childNodes[1].classList.remove('hide-slide');
				document.getElementById(id).childNodes[1].classList.add('show-slide');
				document.getElementById(id).childNodes[length].classList.remove('show-slide');
				document.getElementById(id).childNodes[length].classList.add('hide-slide');

				isShow = "";
			}
		}
		else {
			let isShow = "";
			for(let i = length; i >= 1; i--) {
				if(document.getElementById(id).childNodes[i].classList.contains('show-slide')) {
					isShow = i - 1;
				}
				document.getElementById(id).childNodes[i].classList.remove('show-slide');
				document.getElementById(id).childNodes[i].classList.add('hide-slide');
				
				if(isShow == i) {
					document.getElementById(id).childNodes[i].classList.add('show-slide');
					document.getElementById(id).childNodes[i].classList.remove('hide-slide');
				}	
			}
			
			if(isShow < 1) {
				document.getElementById(id).childNodes[length].classList.remove('hide-slide');
				document.getElementById(id).childNodes[length].classList.add('show-slide');
				document.getElementById(id).childNodes[1].classList.remove('show-slide');
				document.getElementById(id).childNodes[1].classList.add('hide-slide');

				isShow = "";
			}
		}
	},

	answerSection: function(mainKey, props) {
		var {key, title, desc, sectionBg, type, opt, drop, medicines, value } = props;

		switch(type) {
			case 'drop':
				if(drop.length != 0 && typeof twnlObj[mainKey].state[key+'ValueType'] == "undefined") {
					this.setDropKey(mainKey, key+'ValueType', drop[0].value)
				}

				let dropHtml = "";
				let optHtml = "";
				let optHtmlTemp = "";
				for(let i in drop) {
					dropHtml += `<option value="${drop[i].value}" ${twnlObj[mainKey].state[key+'ValueType'] == drop[i].value ? 'selected' : ''}>${drop[i].text}</option>`

					if(twnlObj[mainKey].state[key+'ValueType'] == drop[i].value) {
						switch(drop[i].optType) {
							case 'drop':
								optHtmlTemp = "";
								if(drop[i].opt.length != 0 ) {
									for(let j in drop[i].opt) {
										optHtmlTemp += `<option value="${drop[i].opt[j].value}" ${twnlObj[mainKey].state.value[key] == drop[i].opt[j].value ? 'selected' : ''}>${drop[i].opt[j].text}</option>`
									}
								}

								optHtml = 
									`<div class="sewa-options-wrapper">
						                <select onchange="twnlStateHandler.handleDropdownSelection(this, '${mainKey}', '${key}')">
						                	${optHtmlTemp}
						                </select>
						                <div>
						                    <div id="1-bulan-price"></div>
						                    <div id="2-bulan-price"></div>
						                    <div id="3-bulan-price"></div>
						                </div>
						            </div>`;
							break;

							default:
								let isImageOpt = false;
								if(drop[i].opt.length != 0 && drop[i].opt[0].img) {
									isImageOpt = true;
								}

								let isSlide = false;
								if(isImageOpt == true && window.innerWidth < '768') {
									isSlide = true;
								}

								optHtmlTemp = "";
								if(drop[i].opt.length != 0 ) {
									for(let j in drop[i].opt) {
										let isShowSlideClass = false;
										if(isSlide) {
											if(twnlObj[mainKey].state.value[key] != drop[i].opt[j].value) {
												if(j == 0 && (typeof twnlObj[mainKey].state.value[key] == "undefined" || twnlObj[mainKey].state.value[key] == '')) {
													isShowSlideClass = true;
												}	
											}
											else {
												isShowSlideClass = true;
											}
										}
										
										optHtmlTemp += 
											`<div class="${isImageOpt ? "image-choice-options" : "options"} ${isShowSlideClass ? 'show-slide' : 'hide-slide'} ${twnlObj[mainKey].state.value[key] == drop[i].opt[j].value ? 'active' : '' }"
												onclick="twnlStateHandler.updateSelection('${mainKey}', '${key}', '${drop[i].opt[j].value}')">
												<div class=${isImageOpt ? 'items' : 'center-fix'}>
													<div>${isImageOpt ? `<img src=${drop[i].opt[j].img} alt="${title}-${j}" />` : drop[i].opt[j].text}</div>
													<p>IDR ${Number(drop[i].opt[j].value).toLocaleString()}</p>
												</div>
							                </div>`
									}
								}

								optHtml = 
									`<div class="options-wrapper" id="${mainKey+'_'+key}">
										${optHtmlTemp}

										${
											isSlide
											?
												`<div class="slide-nav-wrap">
													<button class="slide-left" onclick="twnlStateHandler.slideChange(this, '${mainKey+'_'+key}', 'prev', ${drop[i].opt.length})"></button>
					  								<button class="slide-right" onclick="twnlStateHandler.slideChange(this, '${mainKey+'_'+key}', 'next', ${drop[i].opt.length})"></button>
												</div>`
					  							:
					  							""
										}
						            </div>`;								
							break;
						}
					}
				}

				return (`
					<div class="answer-section-${sectionBg}-wrapper" id="${key}">
			            <div class="heading-wrapper">
							<div class="check ${typeof twnlObj[mainKey].state.value[key] != "undefined" && twnlObj[mainKey].state.value[key] != '' ? '' : 'blank-circle'}" 
								onclick="twnlStateHandler.updateSelection('${mainKey}', '${key}', '')">
								<div class="ticked"></div>
							</div>
			                <div>${title}</div>
			                <p>${desc}</p>
			            
							${
								dropHtml != ""
								? 
									`<select onchange="twnlStateHandler.handleValueTypeChage(this, '${mainKey}', '${key}')">
										${dropHtml}
									</select>`
									:
									""
							}
						</div>

						${optHtml}
					</div>
				`)
			break;

			case 'normalDrop':
				let optHtmlNormalDrop = "";
				if(typeof opt != "undefined" && opt.length != 0 ) {
					for(let i in opt) {
						optHtmlNormalDrop += `<option value="${opt[i].value}" ${twnlObj[mainKey].state.value[key] == opt[i].value ? 'selected' : ''}>${opt[i].text}</option>`
					}
				}

				return (`
					<div class="answer-section-${sectionBg}-wrapper" id="${key}">
			            <div class="heading-wrapper">
							<div class="check ${typeof twnlObj[mainKey].state.value[key] != "undefined" && twnlObj[mainKey].state.value[key] != '' ? '' : 'blank-circle'}" 
								onclick="twnlStateHandler.updateSelection('${mainKey}', '${key}', '')">
								<div class="ticked"></div>
							</div>
			                <div>${title}</div>
			                <p>${desc}</p>
						</div>
						<div class="sewa-options-wrapper">
			                <select onchange="twnlStateHandler.handleDropdownSelection(this, '${mainKey}', '${key}')">
			                	${optHtmlNormalDrop}
			                </select>
			                <div>
			                    <div id="1-bulan-price"></div>
			                    <div id="2-bulan-price"></div>
			                    <div id="3-bulan-price"></div>
			                </div>
			            </div>
					</div>
				`)
			break;

			case 'single':

				let medicinesHtml = "";
				for(let i in medicines) {
					medicinesHtml += `<p>${medicines[i].text} - <span>(IDR ${medicines[i].rate})</span></p>`
				}

				return (`
					<div class="answer-section-${sectionBg}-wrapper" id="${key}" onclick="twnlStateHandler.updateSelection('${mainKey}', '${key}', '${value}')">
			            <div class="heading-wrapper">
							<div class="check ${typeof twnlObj[mainKey].state.value[key] != "undefined" && twnlObj[mainKey].state.value[key] != '' ? '' : 'blank-circle'}
								onclick="twnlStateHandler.updateSelection('${mainKey}', '${key}', '')">
								<div class="ticked"></div>
							</div>
			                <div>${title}</div>
			                <p>${desc}</p>

			                <div class="medicines-wrapper hide-wrapper">
			                    ${medicinesHtml}
			                </div>
			                <div class="medicines-wrapper show-wrapper">
			                    ${medicinesHtml}
			                </div>
						</div>
					</div>
				`)
			break;

			default:
				let isImageOpt = false;
				if(opt.length != 0 && opt[0].img) {
					isImageOpt = true;
				}

				let isSlide = false;
				if(isImageOpt == true && window.innerWidth < '768') {
					isSlide = true;
				}

				let optHtmlNormal = "";
				if(typeof opt != "undefined" && opt.length != 0 ) {
					for(let i in opt) {

						let isShowSlideClass = false;
						if(isSlide) {
							if(twnlObj[mainKey].state.value[key] != opt[i].value) {
								if(i == 0 && (typeof twnlObj[mainKey].state.value[key] == "undefined" || twnlObj[mainKey].state.value[key] == '')) {
									isShowSlideClass = true;
								}	
							}
							else {
								isShowSlideClass = true;
							}
						}

						optHtmlNormal += 
								`<div class="${isImageOpt ? "image-choice-options" : "options" } ${isShowSlideClass ? 'show-slide' : 'hide-slide'} ${twnlObj[mainKey].state.value[key] == opt[i].value ? 'active' : '' }"
									onclick="twnlStateHandler.updateSelection('${mainKey}', '${key}', '${opt[i].value}')">
									<div class=${isImageOpt ? "items" : "center-fix"}>
										<div>${isImageOpt ? `<img src=${opt[i].img} alt="${title}-${i}" />` : opt[i].text}</div>
										<p>IDR ${Number(opt[i].value).toLocaleString()}</p>
									</div>
				                </div>`
					}
				}

				let isCheckedNormal = false;
				if(typeof twnlObj[mainKey].state.value[key] != "undefined" && twnlObj[mainKey].state.value[key] != '') {
					isCheckedNormal = true;
				}

				let checkValue = '';
				if(isCheckedNormal == false && typeof opt != "undefined" && opt.length != 0 ) {
					checkValue = opt[0].value;
				}

				return (`
					<div class="answer-section-${sectionBg}-wrapper" id="${key}">
			            <div class="heading-wrapper">
							<div class="check ${isCheckedNormal != '' ? '' : 'blank-circle'}" 
								onclick="twnlStateHandler.updateSelection('${mainKey}', '${key}', '${checkValue}')">
								<div class="ticked"></div>
							</div>
			                <div>${title}</div>
			                <p>${desc}</p>
						</div>
						${
							optHtmlNormal != ""
							?
								`<div class="options-wrapper" id="${mainKey+'_'+key}">
									${optHtmlNormal}

									${
										isSlide
										?
											`<div class="slide-nav-wrap">
												<button class="slide-left" onclick="twnlStateHandler.slideChange(this, '${mainKey+'_'+key}', 'prev', ${opt.length})"></button>
				  								<button class="slide-right" onclick="twnlStateHandler.slideChange(this, '${mainKey+'_'+key}', 'next', ${opt.length})"></button>
											</div>`
				  							:
				  							""
									}
					            </div>`
								:
								""
						}
					</div>
				`)
			break;
		}
	}
} 

const twnlBabyClothesNeeds = {

	render: function() {

		let html = "";
		for(let i in twnlObj.twnlBabyClothesNeeds.questions) {
			let data = twnlObj.twnlBabyClothesNeeds.questions[i]

			html += twnlStateHandler.answerSection('twnlBabyClothesNeeds',{ 
				key: 'question_' + i,
				title: data.title,
				desc: data.desc,
				type: data.type,
				sectionBg: i % 2 == 0 ? 'grey' : 'white',
				opt: typeof data.opt != "undefined" ? data.opt : [],
				drop: typeof data.drop != "undefined" ? data.drop : []
			})
		}

		return(`
			<div class="baby-clothes-needs container">
			    <div class="section-wrapper">
			        <div class="question-section-wrapper">
			            <h1>${twnlObj.twnlBabyClothesNeeds.title}</h1>
			            <p>${twnlObj.twnlBabyClothesNeeds.desc}</p>
			        </div>

			        ${html}				
			    </div>
			</div>
		`)
	}
};

const twnlKebutuhanAlatMandiBayi = {
	
	render: function() {

		let html = "";
		for(let i in twnlObj.twnlKebutuhanAlatMandiBayi.questions) {
			let data = twnlObj.twnlKebutuhanAlatMandiBayi.questions[i]

			html += twnlStateHandler.answerSection('twnlKebutuhanAlatMandiBayi',{ 
				key: 'question_' + i,
				title: data.title,
				desc: data.desc,
				type: data.type,
				sectionBg: i % 2 == 0 ? 'grey' : 'white',
				opt: typeof data.opt != "undefined" ? data.opt : [],
				drop: typeof data.drop != "undefined" ? data.drop : []
			})
		}

		return(`
			<div class="kebutuhan-alat-mandi container">
			    <div class="section-wrapper">
			        <div class="question-section-wrapper">
			            <h1>${twnlObj.twnlKebutuhanAlatMandiBayi.title}</h1>
			            <p>${twnlObj.twnlKebutuhanAlatMandiBayi.desc}</p>
			        </div>

			        ${html}				
			    </div>
			</div>
		`)
	}
};

const twnlPerlengkapanTidurBayi = {

	
	render: function() {

		let html = "";
		for(let i in twnlObj.twnlPerlengkapanTidurBayi.questions) {
			let data = twnlObj.twnlPerlengkapanTidurBayi.questions[i]

			html += twnlStateHandler.answerSection('twnlPerlengkapanTidurBayi',{ 
				key: 'question_' + i,
				title: data.title,
				desc: data.desc,
				type: data.type,
				sectionBg: i % 2 == 0 ? 'grey' : 'white',
				opt: typeof data.opt != "undefined" ? data.opt : [],
				drop: typeof data.drop != "undefined" ? data.drop : []
			})
		}

		return(`
			<div class="perlengkapan-tidur container">
			    <div class="section-wrapper">
			        <div class="question-section-wrapper">
			            <h1>${twnlObj.twnlPerlengkapanTidurBayi.title}</h1>
			            <p>${twnlObj.twnlPerlengkapanTidurBayi.desc}</p>
			        </div>

			        ${html}				
			    </div>
			</div>
		`)
	}
};

const twnlPelengkapanKesehatanSiKecil = {
	
	render: function() {

		let html = "";
		for(let i in twnlObj.twnlPelengkapanKesehatanSiKecil.questions) {
			let data = twnlObj.twnlPelengkapanKesehatanSiKecil.questions[i]

			html += twnlStateHandler.answerSection('twnlPelengkapanKesehatanSiKecil',{ 
				key: 'question_' + i,
				title: data.title,
				desc: data.desc,
				type: data.type,
				sectionBg: i % 2 == 0 ? 'grey' : 'white',
				opt: typeof data.opt != "undefined" ? data.opt : [],
				drop: typeof data.drop != "undefined" ? data.drop : []
			})
		}

		return(`
			<div class="perlengkapan-kesehatan container">
			    <div class="section-wrapper">
			        <div class="question-section-wrapper">
			            <h1>${twnlObj.twnlPelengkapanKesehatanSiKecil.title}</h1>
			            <p>${twnlObj.twnlPelengkapanKesehatanSiKecil.desc}</p>
			        </div>

			        ${html}				
			    </div>
			</div>
		`)
	}
};

const twnlPerlengkapanMakanBayi = {
	
	render: function() {

		let html = "";
		for(let i in twnlObj.twnlPerlengkapanMakanBayi.questions) {
			let data = twnlObj.twnlPerlengkapanMakanBayi.questions[i]

			html += twnlStateHandler.answerSection('twnlPerlengkapanMakanBayi',{ 
				key: 'question_' + i,
				title: data.title,
				desc: data.desc,
				type: data.type,
				sectionBg: i % 2 == 0 ? 'grey' : 'white',
				opt: typeof data.opt != "undefined" ? data.opt : [],
				drop: typeof data.drop != "undefined" ? data.drop : []
			})
		}

		return(`
			<div class="perlengkapan-makan container">
			    <div class="section-wrapper">
			        <div class="question-section-wrapper">
			            <h1>${twnlObj.twnlPerlengkapanMakanBayi.title}</h1>
			            <p>${twnlObj.twnlPerlengkapanMakanBayi.desc}</p>
			        </div>

			        ${html}				
			    </div>
			</div>
		`)
	}
};

const twnlBabyActivity = {

	render: function() {

		let html = "";
		for(let i in twnlObj.twnlBabyActivity.questions) {
			let data = twnlObj.twnlBabyActivity.questions[i]

			html += twnlStateHandler.answerSection('twnlBabyActivity',{ 
				key: 'question_' + i,
				title: data.title,
				desc: data.desc,
				type: data.type,
				sectionBg: i % 2 == 0 ? 'grey' : 'white',
				opt: typeof data.opt != "undefined" ? data.opt : [],
				drop: typeof data.drop != "undefined" ? data.drop : []
			})
		}

		return(`
			<div class="baby-activity container">
			    <div class="section-wrapper">
			        <div class="question-section-wrapper">
			            <h1>${twnlObj.twnlBabyActivity.title}</h1>
			            <p>${twnlObj.twnlBabyActivity.desc}</p>
			        </div>

			        ${html}				
			    </div>
			</div>
		`)
	}
};

const twnlPendidikan = {
	state: {
		value: {
			educationFee: "",
		}
	},

	updateSelection: function(key, value) {
		if(this.state.value[key] != value)
		{
			this.state.value[key] = value;	
		}
		else {
			this.state.value[key] = "";
		}

		twnlMain.render();
	},

	render: function() {
		return(`
			<div class="dana_pendidikan_page container">

			    <div class="section-wrapper">
			        <div class="question-section-wrapper">
			            <h1>${twnlObj.twnlPendidikan.title}</h1>
			            <p>${twnlObj.twnlPendidikan.desc}</p>
			        </div>

			        <div class="answer-section-grey-wrapper" onclick="twnlPendidikan.updateSelection('educationFee', '9600000')">
			            <div class="heading-wrapper">
			            	<div class="check ${this.state.value.educationFee != '9600000' ? 'blank-circle' : ''}
			            		onclick="twnlPendidikan.updateSelection('educationFee', '9600000')">
								<div class="ticked"></div>
							</div>
			                <div>Low</div>
			            </div>
			            <div class="fees">
							<div id="fees-1">
								<div>Uang Pangkal</div>
								<span>< IDR 8,000,000</span>
							</div>
							<div id="fees-2">
								<div>SPP</div>
								<span>< IDR 1,600,000</span>
							</div>
						</div>
						<div class="fasilitas">
							<div>Fasilitas</div>
							<span>Bahasa Indonesia, Local outing, Native speaker 1x per week</span>
						</div>
						<div class="kurikulum">
							<div>Kurikulum</div>
							<span>National</span>
						</div>
					</div>

					<div class="answer-section-white-wrapper" onclick="twnlPendidikan.updateSelection('educationFee', '15000000')">
						<div class="heading-wrapper">
							<div class="check ${this.state.value.educationFee != '15000000' ? 'blank-circle' : ''}
								onclick="twnlPendidikan.updateSelection('educationFee', '9600000')">
								<div class="ticked"></div>
							</div>
							<div>Medium</div>
						</div>
						<div class="fees">
							<div id="fees-1">
								<div>Uang Pangkal</div>
								<span>IDR 9.000.000 - IDR 25.000.000</span>
							</div>
							<div id="fees-2">
								<div>SPP</div>
								<span>IDR 1.600.000 - IDR 3.000.000</span>
							</div>
						</div>
						<div class="fasilitas">
							<div>Fasilitas</div>
							<span>Bilingual (Inggris, Indonesia), Gymnastic, Swimming pool, Field trip</span>
						</div>
						<div class="kurikulum">
							<div>Kurikulum</div>
							<span>National plus - Internatsional</span>
						</div>
					</div>

					<div class="answer-section-grey-wrapper" onclick="twnlPendidikan.updateSelection('educationFee', '28000000')">
						<div class="heading-wrapper">
							<div class="check ${this.state.value.educationFee != '28000000' ? 'blank-circle' : ''}
								onclick="twnlPendidikan.updateSelection('educationFee', '9600000')">
								<div class="ticked"></div>
							</div>
							<div>High</div>
						</div>
						<div class="fees">
							<div id="fees-1">
								<div>Uang Pangkal</div>
								<span>> IDR 25.000.000</span>
							</div>
							<div id="fees-2">
								<div>SPP</div>
								<span>> IDR 3.000.000</span>
							</div>
						</div>
						<div class="fasilitas">
							<div>Fasilitas</div>
							<span>Trilingual (Inggris, Indonesia, Mandarin), Gymnastic, Swimming pool, Field trip, Montesorri</span>
						</div>
						<div class="kurikulum">
							<div>Kurikulum</div>
							<span>Nasional berakreditasi internasional</span>
						</div>
					</div>
			    </div>

			</div>
		`)
	}
};

const twnlHealth = {
	render: function() {

		let html = "";
		for(let i in twnlObj.twnlHealth.questions) {
			let data = twnlObj.twnlHealth.questions[i]

			html += twnlStateHandler.answerSection('twnlHealth',{ 
				key: 'question_' + i,
				title: data.title,
				desc: data.desc,
				type: data.type,
				sectionBg: i % 2 == 0 ? 'grey' : 'white',
				opt: typeof data.opt != "undefined" ? data.opt : [],
				drop: typeof data.drop != "undefined" ? data.drop : [],
				medicines: typeof data.medicines != "undefined" ? data.medicines : [],
				value: typeof data.value != "undefined" ? data.value : '',
			})
		}

		return(`
			<div class="health_page container">
			    <div class="section-wrapper">
			        <div class="question-section-wrapper">
			            <h1>${twnlObj.twnlHealth.title}</h1>
			            <p>${twnlObj.twnlHealth.desc}</p>
			        </div>

			        ${html}				
			    </div>
			</div>
		`)
	}
};

const twnlImageChoice = {

	render: function() {

		let html = "";
		for(let i in twnlObj.twnlImageChoice.questions) {
			let data = twnlObj.twnlImageChoice.questions[i]

			html += twnlStateHandler.answerSection('twnlImageChoice',{ 
				key: 'question_' + i,
				title: data.title,
				desc: data.desc,
				type: data.type,
				sectionBg: i % 2 == 0 ? 'grey' : 'white',
				opt: typeof data.opt != "undefined" ? data.opt : [],
				drop: typeof data.drop != "undefined" ? data.drop : []
			})
		}

		return(`
			<div class="image_choice_page container">
			    <div class="section-wrapper">
			        <div class="question-section-wrapper">
			            <h1>${twnlObj.twnlImageChoice.title}</h1>
			            <p>${twnlObj.twnlImageChoice.desc}</p>
			        </div>

			        ${html}				
			    </div>
			</div>
		`)
	}
};

const twnlBiayaPersalinan = {
	
	render: function() {

		let html = "";
		for(let i in twnlObj.twnlBiayaPersalinan.questions) {
			let data = twnlObj.twnlBiayaPersalinan.questions[i]

			html += twnlStateHandler.answerSection('twnlBiayaPersalinan',{ 
				key: 'question_' + i,
				title: data.title,
				desc: data.desc,
				type: data.type,
				sectionBg: i % 2 == 0 ? 'grey' : 'white',
				opt: typeof data.opt != "undefined" ? data.opt : [],
				drop: typeof data.drop != "undefined" ? data.drop : []
			})
		}

		return(`
			<div class="baby-clothes-needs container">
			    <div class="section-wrapper">
			        <div class="question-section-wrapper">
			            <h1>${twnlObj.twnlBiayaPersalinan.title}</h1>
			            <p>${twnlObj.twnlBiayaPersalinan.desc}</p>
			        </div>

			        ${html}				
			    </div>
			</div>
		`)
	}
};

const twnlPerlengkapanMama = {
	
	render: function() {

		let html = "";
		for(let i in twnlObj.twnlPerlengkapanMama.questions) {
			let data = twnlObj.twnlPerlengkapanMama.questions[i]

			html += twnlStateHandler.answerSection('twnlPerlengkapanMama',{ 
				key: 'question_' + i,
				title: data.title,
				desc: data.desc,
				type: data.type,
				sectionBg: i % 2 == 0 ? 'grey' : 'white',
				opt: typeof data.opt != "undefined" ? data.opt : [],
				drop: typeof data.drop != "undefined" ? data.drop : []
			})
		}

		return(`
			<div class="baby-clothes-needs container">
			    <div class="section-wrapper">
			        <div class="question-section-wrapper">
			            <h1>${twnlObj.twnlPerlengkapanMama.title}</h1>
			            <p>${twnlObj.twnlPerlengkapanMama.desc}</p>
			        </div>

			        ${html}				
			    </div>
			</div>
		`)
	}
};

const twnlBiayaLain = {
	
	render: function() {

		let html = "";
		for(let i in twnlObj.twnlBiayaLain.questions) {
			let data = twnlObj.twnlBiayaLain.questions[i]

			html += twnlStateHandler.answerSection('twnlBiayaLain',{ 
				key: 'question_' + i,
				title: data.title,
				desc: data.desc,
				type: data.type,
				sectionBg: i % 2 == 0 ? 'grey' : 'white',
				opt: typeof data.opt != "undefined" ? data.opt : [],
				drop: typeof data.drop != "undefined" ? data.drop : []
			})
		}

		return(`
			<div class="baby-clothes-needs container">
			    <div class="section-wrapper">
			        <div class="question-section-wrapper">
			            <h1>${twnlObj.twnlBiayaLain.title}</h1>
			            <p>${twnlObj.twnlBiayaLain.desc}</p>
			        </div>

			        ${html}				
			    </div>
			</div>
		`)
	}
};

const twnlResult = {

	clickDownload: function() {
		
		window.scrollTo(0, 0);
		document.getElementById('twnlOverlay').classList.add('active');
		document.getElementById('twnlResultPage').classList.add('active');

		setTimeout(function(){
			//130, 260 || 105 x 147 || 147 x 210 || 210 x 298 || 298 × 420 || 420 × 595 || 595 × 842
			let width = 147;
			let height = 550;

			if(window.innerWidth > '551' && window.innerWidth <= '991') {
				width = 298;
				height = 780;
			}
			else if (window.innerWidth > '991' && window.innerWidth <= '1300') {
				width = 420;
				height = 800;	
			}
			else if (window.innerWidth > '1300') {
				width = 595;
				height = 842;	
			}
			
			var pdf = new jsPDF('p', 'pt', [width, height]);

			pdf.internal.scaleFactor = 2.25;
	    	
			pdf.addHTML(document.getElementById('twnlResultPagePage1'), 0, 0, { pagesplit: true }, 
			function(dispose){
				pdf.addPage();

				pdf.addHTML(document.getElementById('twnlResultPagePage2'), 0, 10, { pagesplit: true }, 
				function(dispose){
					pdf.addPage();

					pdf.addHTML(document.getElementById('twnlResultPagePage3'), 0, 0, { pagesplit: true }, 
					function(dispose){
						pdf.save('TGPA-Calculator.pdf');

						document.getElementById('twnlOverlay').classList.remove('active');
						document.getElementById('twnlResultPage').classList.remove('active');
					});
				});
			});
		}, 2000);
	},

	render: function(props) {

		let total = 0;
		for(let i in props.total) {
			if(props.total[i] !== "") {
				total = total + Number(props.total[i])
			}
		}
		
		return (`

			<div class="twnl-overlay" id="twnlOverlay">
					<span class="spinner"></span>
				</div>

			<div class="result_page" id="twnlResultPage">
				<div class="pdf-page" id="twnlResultPagePage1">
					<div class="result_header">
						<h1>Hasil Akhir Biaya Kebutuhan si Kecil</h1>
						<div class="result-header-inner">
							<img src="images/background-result-price.png" alt="background-result-price"/>

							<div>
								<span>Biaya yang dibutuhkan</span>
								<p>Rp. ${total.toLocaleString()}</p>
							</div>
						</div>
					</div>

					<div class="summary_note">
						Terima kasih telah menggunakan Kalkulator Perencanaan Finansial si Kecil.<br />
						Berikut ringkasan biaya untuk Mama dan Papa yang sudah dirinci melalui daftar pilihan Mama dan Papa sebelumnya sebagai berikut:
					</div>

					<div class="summary_list">
						${props.total.twnlBabyClothesNeeds != 0 ? 
						`<div class="categories_list">
							<p>Kebutuhan Baju Bayi</p>
						</div>

						<div class="price_list">
							<p>Rp ${props.total.twnlBabyClothesNeeds.toLocaleString()}</p>
						</div>`
						: ""}
					</div>

					<div class="summary_list">
						${props.total.twnlKebutuhanAlatMandiBayi != 0 ? 
						`<div class="categories_list">
							<p>Kebutuhan Alat Mandi Bayi</p>
						</div>

						<div class="price_list">
							<p>Rp ${props.total.twnlKebutuhanAlatMandiBayi.toLocaleString()}</p>
						</div>`
						: ""}
					</div>

					<div class="summary_list">
						${props.total.twnlPerlengkapanTidurBayi != 0 ? 
						`<div class="categories_list">
							<p>Perlengkapan Tidur Bayi</p>
						</div>

						<div class="price_list">
							<p>Rp ${props.total.twnlPerlengkapanTidurBayi.toLocaleString()}</p>
						</div>`
						: ""}
					</div>

					<div class="summary_list">
						${props.total.twnlPelengkapanKesehatanSiKecil != 0 ?
						`<div class="categories_list">
							<p>Pelengkap Kesehatan si Kecil</p>
						</div>

						<div class="price_list">
							<p>Rp ${props.total.twnlPelengkapanKesehatanSiKecil.toLocaleString()}</p>
						</div>`
						: ""}
					</div>

					<div class="summary_list">
						${props.total.twnlPerlengkapanMakanBayi != 0 ?
						`<div class="categories_list">
							<p>Perlengkapan Makan Bayi</p>
						</div>

						<div class="price_list">
							<p>Rp ${props.total.twnlPerlengkapanMakanBayi.toLocaleString()}</p>
						</div>`
						: ""}
					</div>

					<div class="summary_list">
						${props.total.twnlBabyActivity != 0 ?
						`<div class="categories_list">
							<p>Kebutuhan Berpergian Bayi</p>
						</div>

						<div class="price_list">
							<p>Rp ${props.total.twnlBabyActivity.toLocaleString()}</p>
						</div>`
						: ""}
					</div>

					<div class="summary_list">
						${props.total.twnlPendidikan != 0 ?
						`<div class="categories_list">
							<p>Baby Activities</p>
						</div>

						<div class="price_list">
							<p>Rp ${props.total.twnlPendidikan.toLocaleString()}</p>
						</div>`
						: ""}
					</div>

					<div class="summary_list">
						${props.total.twnlHealth != 0 ?
						`<div class="categories_list">
							<p>Dana Pendidikan</p>
						</div>

						<div class="price_list">
							<p>Rp ${props.total.twnlHealth.toLocaleString()}</p>
						</div>`
						: ""}
					</div>

					<div class="summary_list">
						${props.total.twnlImageChoice != 0 ?
						`<div class="categories_list">
							<p>Imunisasi Anak</p>
						</div>

						<div class="price_list">
							<p>Rp ${props.total.twnlImageChoice.toLocaleString()}</p>
						</div>`
						: ""}
					</div>

					<div class="summary_list">
						${props.total.twnlBiayaPersalinan != 0 ?
						`<div class="categories_list">
							<p>Biaya Persalinan</p>
						</div>

						<div class="price_list">
							<p>Rp ${props.total.twnlBiayaPersalinan.toLocaleString()}</p>
						</div>`
						: ""}
					</div>

					<div class="summary_list">
						${props.total.twnlPerlengkapanMama != 0 ?
						`<div class="categories_list">
							<p>Perlengkapan Mama</p>
						</div>

						<div class="price_list">
							<p>Rp ${props.total.twnlPerlengkapanMama.toLocaleString()}</p>
						</div>`
						: ""}
					</div>

					<div class="summary_list">
						${props.total.twnlBiayaLain != 0 ?
						`<div class="categories_list">
							<p>Biaya lain-lain</p>
						</div>

						<div class="price_list">
							<p>Rp ${props.total.twnlBiayaLain.toLocaleString()}</p>
						</div>`
						: ""}
					</div>

					<!-- <div class="summary_note bottom-space">
						Selamat mempersiapkan kelahiran si Kecil dengan menyiapkan semua fasilitasnya.
					</div> -->
				</div>
			
				<div class="pdf-page" id="twnlResultPagePage2">
					<div class="result_content">
						<img src="images/ribbon-background.png" id="ribbon-banner" alt="ribbon-banner"/>
						<div class="expert_heading">
							Expert Recommendation From <img src="images/jouska-logo.png" />
						</div>
						<img class="expert-recommendation" src="images/family-only.png" id="recommendation-family" alt="expert-recommendation"/>
						<img class="expert-recommendation" src="images/blueboard-blank.png" id="recommendation" alt="expert-recommendation"/>
						<div class="er_text">
							<h4>
								Sesuaikan Pengeluaran dengan kondisi finansial, yang penting cash flow aman.
							</h4>
							<p>
								Setelah mendapatkan hasil dari perkiraan total biaya diatas, Mama dan Papa harus mampu menyesuaikan pengeluaran dengan kondisi finansial saat ini, pastikan pengeluaran ini tidak menganggu cash flow bulanan dalam jangka panjang.
							</p>
						</div>
						
						<button>Perhatikan hal-hal berikut<br/>dalam persiapan finansial si Kecil :</button>
						<div class="financial_prep">
							<div id="tips">
								<img src="images/pertimbangan-menyewa-icon.png" alt="pertimbangan-menyewa-icon"/>
								<h4>Pertimbangkan Menyewa/Meminjam</h4>
								<span>*tips selalu perhatikan kebersihan alat yang disewa.</span>
							</div>
							<div>
								<img src="images/menabung-tetap-utama-icon.png" alt="menabung-tetap-utama-icon"/>
								<h4>Menabung Tetap Utama</h4>
							</div>
						</div>
					</div>
				</div>
				
				<div class="pdf-page" id="twnlResultPagePage3">
					<div class="result_content_memilih">
						<div class="illustration-text">Memilih Sekolah yang<br/>Tepat untuk si Kecil</div>
						<img src="images/memilih-sekolah-illustration.png" id="illustration" alt="memilih-sekolah-illustration"/>
					</div>
					<div class="result_illustration">
						<p>
							Selain kebutuhan primer si Kecil, dana pendidikan merupakan hal yang harus dipersiapkan sedari dini. Dalam menentukan dana pendidikan, Mama dan Papa dapat mempertimbangkan kebutuhan si Kecil sesuai preferensi masing-masing.
						</p>
						<img src="images/tips-memilih-sekolah-illustration.png" alt="tips-memilih-sekolah-illustration"/>
					</div>

					<div class="notes-wrapper">
						<p>
							Notes: Jangan lupakan juga survey atau kunjungan langsung ke sekolah yang ditargetkan, serta cari tahu sejauh mana peran orang tua dalam proses belajar mengajar tersebut.
						</p>
					</div>
				</div>

				<div class="summary_note bottom-space">
					Selamat mempersiapkan perencanaan finansial untuk si Kecil ya, Mama & Papa!
				</div> 
			</div>
			
			<div class="download-pdf-wrapper">
				<button class="download-pdf" onclick="twnlResult.clickDownload()">Download PDF</button>
			</div>

			<div class="result_footer">
				<h4>Artikel Terkait</h4>
				<div class="articles_list">
					<div>
						<img src="images/article-1.png" alt="article-1"/>
						<p>Tahap Mengatur Jam Tidur si Kecil, Sesuai Usianya</p>
					</div>
					<div>
						<img src="images/article-2.png" alt="article-2"/>
						<p>Cara Merawat Si Kecil Usia 1 - 3 bulan</p>
					</div>
					<div>
						<img src="images/article-3.png" alt="article-3"/>
						<p>Mengenalkan Makanan Pendamping ASI Pada si Kecil</p>
					</div>
					<div>
						<img src="images/article-4.png" alt="article-4"/>
						<p>Peran ASI Untuk Imunitas si Kecil</p>
					</div>
				</div>
			</div>
		`)
	}
};

const twnlPopup = {
	handleButtonClick: function () {
		document.body.style.overflow = 'unset';
    	twnlMain.showDisplayForm();
    },
	render: function () {
		document.body.style.overflow = 'hidden';
		return(`
			<div class="popup-modal">
				<div class="popup">
					<h1>
						Ayo mulai hitung kebutuhan si Kecil dengan langkah berikut
					</h1>
					
					<div class="point-wrapper">
						<div class="point-number">
							<div class="number-container">
								1
							</div>
						</div>
						<div class="point-text">Pilih kebutuhan si Kecil dari daftar yang tersedia</div>
					</div>
					<div class="point-wrapper">
						<div class="point-number">
							<div class="number-container">
								2
							</div>
						</div>
						<div class="point-text">Beberapa hanya rekomendasi dan bersifat tambahan</div>
					</div>
					<div class="point-wrapper">
						<div class="point-number">
							<div class="number-container">
								3
							</div>
						</div>
						<div class="point-text">Lewati jika dirasa sudah terpenuhi atau memiliki opsi berbeda</div>
					</div>
					<div class="point-wrapper">
						<div class="point-number">
							<div class="number-container">
								4
							</div>
						</div>
						<div class="point-text">Mama dan Papa akan mendapatkan total biaya pada halaman akhir</div>
					</div>

					<div class="popup-footer">
						<button onclick="twnlPopup.handleButtonClick()">
							Lewati
						</button>
					</div>

					<div class="dotted-footer">
						<div class="dots">
							
						</div>
						<div class="dots">
							
						</div>
					</div>
				</div>
			</div>
		`)
	}
}

const twnlLanding = {
    
    handleButtonClick: function () {
    	twnlMain.showLandingPopup()
    },

    render: function () {
        
		return (`
			<div class="main">
				<div class="text-wrapper">
			        <h1>
			            Perencanaan<br/>Finansial si Kecil
			        </h1>
			        <div class="powered-by-wrapper">
			            <div class="powered-by">
			                Powered by
			            </div>
			            <img src="images/jouska_logo.png" alt="jouska-logo" />
			        </div>
			        <p>
			            Halo Mama dan Papa, yuk rencanakan semua kebutuhan untuk masa depan si Kecil mulai dari kebutuhan sehari-hari hingga perencanaan pendidikannya lengkap dengan perkiraan biaya, melalui Kalkulator Perencanaan Finansial si Kecil.
			        </p>
			        <div class="yuk-hitung">
			            Yuk hitung kebutuhan si Kecil di sini.
			        </div>
			        <button onclick="twnlLanding.handleButtonClick()">
			            Hitung Sekarang
			        </button>
			    </div>

			    <div class="image-wrapper">
			        <img src="images/illustration-1.png" alt="illustration" />
			    </div>
			</div>
		`)
    }
};

const twnlLoginBeforeResult = {

    render: function () {
        
		return (`
			<div class="main container" id="twnlLoginBeforeResult">
				<div class="family-image-wrapper">
			        <img src="images/illustration-1.png" alt="illustration" class="family-image" />
			    </div>
				<div class="text-wrapper">
			        <h1>
			            Hello!
			        </h1>
			        <p>
			            Terima kasih sudah mengikuti Kalkulator Perencanaan Finansial si Kecil
			        </p>
			       	<p>
						Yuk, daftarkan diri Mama terlebih dahulu
			       	</p>
			        <button onclick="twnlMain.showResultPage()">
			            Join Now
			        </button>
			        <p class="login-wrapper">Sudah memiliki akun? <span class="login-highlight">Login di sini</span></p>
			    </div>
			</div>
		`)
    }
};

const twnlMain = {

	state: {
		page: 2, //0: landing, 1: form, 2: login , 3: result
	 	landingPopup: false,
	 	formStages: 1,
	 	total: {
	 		twnlBabyClothesNeeds: 0, //formStages: 1
		 	twnlKebutuhanAlatMandiBayi: 0, //formStages: 2
		 	twnlPerlengkapanTidurBayi: 0, //formStages: 3
		 	twnlPelengkapanKesehatanSiKecil: 0, //formStages: 4
		 	twnlPerlengkapanMakanBayi: 0, //formStages: 5
		 	twnlBabyActivity: 0, //formStages: 6
		 	twnlPendidikan: 0, //formStages: 7
		 	twnlHealth: 0, //formStages: 8
		 	twnlImageChoice: 0, //formStages: 9
		 	twnlBiayaPersalinan: 0, //formStages: 10
		 	twnlPerlengkapanMama: 0, //formStages: 11
		 	twnlBiayaLain: 0, //formStages: 12
	 	}
	},

	showLandingPopup: function() {
      	this.state.landingPopup = true;
      	this.render();
    },

    showDisplayForm: function() {
    	this.state.landingPopup = false;
    	this.state.page = 1;

      	this.render();
      	this.toTopFunction();
    },

    prevFormStage: function() {
    	this.state.formStages = this.state.formStages - 1;

    	this.render();
    	this.toTopFunction();
    },

    showResultPage: function(){
    	this.state.page = 3;
    	this.render();
    },

    nextFormStage: function() {
    	let total;
    	let isValidated = false
    	switch(this.state.formStages) {
    		case 1:
    			total = 0;
    			for(let i in twnlObj.twnlBabyClothesNeeds.state.value) {
    				if(twnlObj.twnlBabyClothesNeeds.state.value[i] !== "") {
    					total = total + Number(twnlObj.twnlBabyClothesNeeds.state.value[i].replace(/,/g, ''))
    				}
    			}
    			this.state.total.twnlBabyClothesNeeds = total;
				isValidated = true
				break;

			case 2:
				total = 0;
    			for(let i in twnlObj.twnlKebutuhanAlatMandiBayi.state.value) {
    				if(twnlObj.twnlKebutuhanAlatMandiBayi.state.value[i] !== "") {
    					total = total + Number(twnlObj.twnlKebutuhanAlatMandiBayi.state.value[i].replace(/,/g, ''))
    				}
    			}
    			this.state.total.twnlKebutuhanAlatMandiBayi = total;
				isValidated = true
				break;

			case 3:
				total = 0;
    			for(let i in twnlObj.twnlPerlengkapanTidurBayi.state.value) {
    				if(twnlObj.twnlPerlengkapanTidurBayi.state.value[i] !== "") {
    					total = total + Number(twnlObj.twnlPerlengkapanTidurBayi.state.value[i].replace(/,/g, ''))
    				}
    			}
    			this.state.total.twnlPerlengkapanTidurBayi = total;
				isValidated = true
				break;

			case 4:
				total = 0;
    			for(let i in twnlObj.twnlPelengkapanKesehatanSiKecil.state.value) {
    				if(twnlObj.twnlPelengkapanKesehatanSiKecil.state.value[i] !== "") {
    					total = total + Number(twnlObj.twnlPelengkapanKesehatanSiKecil.state.value[i].replace(/,/g, ''))
    				}
    			}
    			this.state.total.twnlPelengkapanKesehatanSiKecil = total;
				isValidated = true
				break;

			case 5:
				total = 0;
    			for(let i in twnlObj.twnlPerlengkapanMakanBayi.state.value) {
    				if(twnlObj.twnlPerlengkapanMakanBayi.state.value[i] !== "") {
    					total = total + Number(twnlObj.twnlPerlengkapanMakanBayi.state.value[i].replace(/,/g, ''))
    				}
    			}
    			this.state.total.twnlPerlengkapanMakanBayi = total;
				isValidated = true
				break;

			case 6:
				total = 0;
    			for(let i in twnlObj.twnlBabyActivity.state.value) {
    				if(twnlObj.twnlBabyActivity.state.value[i] !== "") {
    					total = total + Number(twnlObj.twnlBabyActivity.state.value[i].replace(/,/g, ''))
    				}
    			}
    			this.state.total.twnlBabyActivity = total;
				isValidated = true
				break;

			case 7:
				total = 0;
    			for(let i in twnlPendidikan.state.value) {
    				if(twnlPendidikan.state.value[i] !== "") {
    					total = total + Number(twnlPendidikan.state.value[i].replace(/,/g, ''))
    				}
    			}
    			this.state.total.twnlPendidikan = total;
				isValidated = true
				break;

			case 8:
				total = 0;
    			for(let i in twnlObj.twnlHealth.state.value) {
    				if(twnlObj.twnlHealth.state.value[i] !== "") {
    					total = total + Number(twnlObj.twnlHealth.state.value[i].replace(/,/g, ''))
    				}
    			}
    			this.state.total.twnlHealth = total;
				isValidated = true
				break;

			case 9:
				total = 0;
    			for(let i in twnlObj.twnlImageChoice.state.value) {
    				if(twnlObj.twnlImageChoice.state.value[i] !== "") {
    					total = total + Number(twnlObj.twnlImageChoice.state.value[i].replace(/,/g, ''))
    				}
    			}
    			this.state.total.twnlImageChoice = total;
				isValidated = true
				break;

			case 10:
				total = 0;
    			for(let i in twnlObj.twnlBiayaPersalinan.state.value) {
    				if(twnlObj.twnlBiayaPersalinan.state.value[i] !== "") {
    					total = total + Number(twnlObj.twnlBiayaPersalinan.state.value[i].replace(/,/g, ''))
    				}
    			}
    			this.state.total.twnlBiayaPersalinan = total;
				isValidated = true
				break;

			case 11:
				total = 0;
    			for(let i in twnlObj.twnlPerlengkapanMama.state.value) {
    				if(twnlObj.twnlPerlengkapanMama.state.value[i] !== "") {
    					total = total + Number(twnlObj.twnlPerlengkapanMama.state.value[i].replace(/,/g, ''))
    				}
    			}
    			this.state.total.twnlPerlengkapanMama = total;
				isValidated = true
				break;

			case 12:
				total = 0;
    			for(let i in twnlObj.twnlBiayaLain.state.value) {
    				if(twnlObj.twnlBiayaLain.state.value[i] !== "") {
    					total = total + Number(twnlObj.twnlBiayaLain.state.value[i].replace(/,/g, ''))
    				}
    			}
    			this.state.total.twnlBiayaLain = total;
				isValidated = true
				break;

			default:
				isValidated = false;
				break;
    	}

    	if(isValidated == true) {
    		if(this.state.formStages == 12) {
    			this.state.page = 2;

    		} 
    		else {
    			this.state.formStages = this.state.formStages + 1;
    		}

	    	this.render();
	    	this.toTopFunction();
    	}
    },

    toTopFunction: function() {
    	window.scrollTo(0, 0);
    },

	render: function() {
		let html;

		switch(this.state.page) {
			case(1):
				let progressValue = 8.33 * this.state.formStages;

				let formHtml;
				switch(this.state.formStages) {
					case 1:
						formHtml = twnlBabyClothesNeeds.render()
						break;

					case 2:
						formHtml = twnlKebutuhanAlatMandiBayi.render()
						break;

					case 3:
						formHtml = twnlPerlengkapanTidurBayi.render()
						break;

					case 4:
						formHtml = twnlPelengkapanKesehatanSiKecil.render()
						break;

					case 5:
						formHtml = twnlPerlengkapanMakanBayi.render()
						break;

					case 6:
						formHtml = twnlBabyActivity.render()
						break;

					case 7:
						formHtml = twnlPendidikan.render()
						break;

					case 8:
						formHtml = twnlHealth.render()
						break;

					case 9:
						formHtml = twnlImageChoice.render();
						break;

					case 10:
						formHtml = twnlBiayaPersalinan.render()
						break;

					case 11:
						formHtml = twnlPerlengkapanMama.render()
						break;

					case 12:
						formHtml = twnlBiayaLain.render()
						break;


					default:
						formHtml = "";
						break;
				}

				html = `
					<section>
						<div class="container">
							<div class="progress-bar-wrapper">
						        <div>
						            <p>
						                List Kebutuhan
						            </p>
						            <div class="progress">
						                <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="flex-basis: ${progressValue}%">
						                </div>
									</div>
									<div class="counter">
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
									</div>
						        </div>
						    </div>
						</div>

						${formHtml}
					
						<div class="button-wrapper container">
							${
								this.state.formStages > 1 
								? 
									`<button id="back-button" onclick="twnlMain.prevFormStage()">
						                < Sebelumnya 
						            </button>`
						            :
						            ""
							}
				            
				            ${
								this.state.formStages <= 12  
								?	
									`<button id="next-button" onclick="twnlMain.nextFormStage()">
						                ${this.state.formStages == 12 ? `Selesai` : `Selanjutnya >`}
						            </button>`
						            :
						            ""
							}
				            
				        </div>
					</section>
				`
			break;

			case(2):
				html = `
					<section>
						${ twnlLoginBeforeResult.render() }
					</section>
				`
			break;

			case(3):
				html = `
					<section>
						${twnlResult.render({total: this.state.total})}
					</section>
				`
			break;

			default:
				html = `
					<section>
						${ twnlLanding.render() }

						<div class="landing-popup">
							${ this.state.landingPopup === true ? twnlPopup.render() : "" }
						</div>
					</section>
				`
			break;		
		}

		if(document.getElementById('insertTwnlCalModule')) {
			document.getElementById('insertTwnlCalModule').innerHTML =  
				`

					    <!-- HEADER -->
					    <section id="site-header">

					        <!-- NAVIGASI DESKTOP -->
					        <nav class="navbar navbar-default navbar-tnma bg-nav">
					            <div class="container">
					                <!-- Brand and toggle get grouped for better mobile display -->
					                <div class="navbar-header size-header">
					                    <a class="navbar-brand size-brand" href='https://www.nutriclub.co.id/parentsguideacademy'>
					                        <picture>
												<source type="image/webp" srcset="https://www.nutriclub.co.id/Assets/Images/TNMA/logo/logo-tpga.webp" />
												<img alt="Logo" src="https://www.nutriclub.co.id/Assets/Images/TNMA/logo/logo-tpga.png" />
											</picture>
					                    </a>
					                </div>

					                <!-- Collect the nav links, forms, and other content for toggling -->
					                <div>
					                    <!-- desktop -->
					                    <ul class="nav navbar-nav navbar-right hidden-xs">
					                        <!-- <li>
					                            <form class="search hidden-sm hidden-xs" action="/action_page.php">
					                                <button type="submit"><i class="fa fa-search"></i></button>
					                                <input type="text" name="search">
					                            </form>
					                        </li> -->
					                            <li><a id="cta-login" href="#" data-toggle="modal" data-dismiss="modal" data-target="#popup-login">LOGIN</a></li>
					                            <li><a id="cta-register" href="#" data-toggle="modal" data-dismiss="modal" data-target="#popup-register">REGISTER</a></li>
					                        <li><a class="style-burger" onclick="openNav()">&#9776</a></li>
					                    </ul>
					                    <!-- mobile -->
					                    <ul class="nav navbar-nav navbar-right visible-xs">
					                        <li>
					                            <span>
					                                <img class="user-icon-sm" src="https://www.nutriclub.co.id/Assets/Images/TNMA/icon/user-photo.png" data-toggle="collapse" data-target="#AuthBoxMobile">
					                            </span>
					                        </li>
					                        <li><a class="style-burger" onclick="openNav()">&#9776</a></li>
					                    </ul>
					                    <div id="AuthBoxMobile" class="collapse auth-box-mobile">
					                            <a id="cta-login" href="#" data-toggle="modal" data-dismiss="modal" data-target="#popup-login">LOGIN</a>
					                            <a id="cta-register" href="#" data-toggle="modal" data-dismiss="modal" data-target="#popup-register">REGISTER</a>
					                    </div>
					                </div><!-- /.navbar-collapse -->
					            </div><!-- /.container-fluid -->
					        </nav>

					        <!-- SIDE NAV -->
					        <div id="sideNav" class="sidenav text-center">
					            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><span>&times;</span></a>     
					            <ul>
					                <li class="margin-bottom-20">
					                    <h1>READ</h1>
					                    <a id="cta-particle1" class="a-link" href='https://www.nutriclub.co.id/parentsguideacademy/parenting-article'>Parenting Articles</a>
					                    <a id="cta-qna1" class="a-link" href='https://www.nutriclub.co.id/parentsguideacademy/q-a-with-expert'>Q&A with Expert</a>
					                </li>

					                <li class="margin-bottom-20">
					                    <h1>LEARN</h1>
					                    <a id="cta-pebook1" class="a-link" href='https://www.nutriclub.co.id/parentsguideacademy/parenting-e-book'>Parenting E-book</a>
					                    <!-- <a class="a-link" href="">Financial Plan Calculator</a> -->
					                    <a id="cta-pvideo1" class="a-link" href='https://www.nutriclub.co.id/parentsguideacademy/parenting-video'>Parenting Video</a>
					                </li>

					                <li class="margin-bottom-20">
					                    <h1>INFO</h1>
					                    <a id="cta-pclass1" class="a-link" href='https://www.nutriclub.co.id/parentsguideacademy/parenting-class'>Parenting Class</a>
					                </li>

					                <li class="margin-top-40">
					                    <h1><a id="cta-momentum1" class="color-momentum" href='https://www.nutriclub.co.id/parentsguideacademy/timeline'>MOMENTUM PERKEMBANGAN SI KECIL</a></h1>
					                </li>
					            </ul>
					        </div>
					    </section>

					   <!--  -->





				<div class="twna-calculator">
					${html}
				</div>




				
					<!-- FOOTER -->
				    <section id="site-footer">
				        <footer>
				    <button class="btn btn-primary btn-block btn-gold" type="button" data-toggle="collapse" data-target="#collapseAsi" aria-expanded="false" aria-controls="collapseAsi">
				         Asi, Terbaik Bagi Bayi    <span><i class="fa fa-chevron-down"></i></span>
				    </button>
				    <div class="collapse" id="collapseAsi">
				        <div class="container align-center">
				            <p>Air Susu Ibu adalah yang terbaik untuk bayi dan sangat bermanfaat. Penting bahwa dalam persiapan untuk dan selama menyusui, Anda melakukan diet yang sehat dan seimbang. Menggabungkan pemberian ASI dan botol pada minggu pertama kehidupan dapat mengurangi suplai ASI Anda, dan sulit untuk dapat menyusui kembali bila telah berhenti. Konsultasikan kepada dokter, bidan atau ahli medis lainnya untuk nasihat mengenai pemberian makan bayi Anda. Kalau Anda menggunakan formula bayi, Anda harus mengikuti petunjuk fabrikan secara seksama.</p>
				        </div>
				    </div>

				    <div class="footer-page-links">
				        <div class="container">
				            <ul>
				                
				                        <li>
				                            <a href="/tentang/">Tentang Nutriclub</a>
				                        </li>
				                        <li>
				                            <a href="/expert/">Hubungi Kami</a>
				                        </li>
				                        <li>
				                            <a href="/sitemap/">Sitemap</a>
				                        </li>
				                        <li>
				                            <a href="/kebijakan-privasi/">Kebijakan Privasi</a>
				                        </li>
				                        <li>
				                            <a href="/syarat-dan-ketentuan/">Syarat &amp; Ketentuan</a>
				                        </li>
				                        <li>
				                            <a href="/korporat/">Pernyataan Korporat</a>
				                        </li>
				            </ul>
				        </div>
				    </div>

				    <div class="footer-page-logos">
				        <div class="container">
				            <div class="row">
				                <div class="col-sm-3">
				                    <div class="footer-page-logo footer-page-logo-careline">
				                        <img src="https://www.nutriclub.co.id/Assets/Images/footer-247.png" alt="">
				                        <ul>
				                            <li><a href="tel://08041181818" title="">Call Careline 0 804 118 1818</a></li>
				                            <li><a href="" class="footer-modal-trigger" title="" data-toggle="modal" data-target="#modal-email-us">Email Nutriclub</a></li>
				                            <!-- <li><a href="/expert/" title="" class="inactive">Chat Dengan Tim Ahli</a></li> -->
				                            <li><a href="/allergyexpert#section-7" title="" class="inactive">Chat Dengan Tim Ahli</a></li>
				                        </ul>
				                    </div>
				                </div>
				                <div class="col-sm-3 align-center">
				                    <div role="contentinfo" class="footer-page-logo footer-page-logo-nutriclub">
				                        <a href="/" title="Return to the home page">
				                            <img src="https://www.nutriclub.co.id/images/nutriclub-logo.png" alt="">
				                            <p><strong>© 2014 Nutricia Indonesia. </strong>All rights reserved</p>
				                            
				                        </a>
				                    </div>
				                </div>
				                <div class="col-sm-3 align-center">
				                    <div class="footer-page-logo footer-page-logo-research">
				                        <a href="http://nutricia.co.id/nutricia-research/&#10;">
				                            <img src="https://www.nutriclub.co.id/images/logo nutricia.jpg" alt="">
				                            <p>Terus berinovasi sejak 1896</p>
				                            
				                        </a>
				                    </div>
				                </div>
				                <div class="col-sm-3 align-center">
				                    <div class="footer-page-logo footer-page-logo-socials">
				                        <p>Ikuti kami di</p>
				                        <a href="https://www.facebook.com/NutriclubIndonesia/" target="_blank"><img src="https://www.nutriclub.co.id/assets/images/revamp/icon-fb.png" alt=""></a>
				                        <a href="javascript:void(0)" target="_blank"><img src="https://www.nutriclub.co.id/assets/images/revamp/icon-tw.png" alt=""></a>
				                        <a href="https://www.instagram.com/nutriclub_id/" target="_blank"><img src="https://www.nutriclub.co.id/assets/images/revamp/icon-ig.png" alt=""></a>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
				</footer>

				<div class="modal fade footer-modal-contact" id="modal-email-us" tabindex="-1" role="dialog">
				    <div class="modal-dialog" role="document">
				        <div class="modal-content">
				            <div class="modal-body">
				                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				                <iframe data-src="https://www.tanyadok.com/tdokqawidget/nutriclub" width="100%" height="720" marginwidth="0" frameborder="no" scrolling="auto" style="border-style: solid;border-color: #333;border-width: 0px;background: #FFF;"></iframe>
				            </div>
				        </div>
				    </div>
				</div>

				<div class="modal fade footer-modal-contact" id="modal-whatsapp" tabindex="-1" role="dialog">
				    <div class="modal-dialog" role="document">
				        <div class="modal-content">
				            <div class="modal-body">
				                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				                <div class="row">
				                    <div class="col-xs-12">
				                        <img src="https://www.nutriclub.co.id/Assets/Images/nutriclub-logo.png" alt="Nutriclub Logo" class="img-responsive">

				                        <img src="https://www.nutriclub.co.id/Assets/Images/whatsapp.png" alt="" class="img-responsive">

				                        <div class="wa-number">
				                            0821 200000 100
				                        </div>

				                        <p>
				                            Kami juga hadir melalui Whatsapp setiap <strong>Senin - Jum'at pada pukul 07.00 - 22.00 WIB</strong> untuk mempermudah kami dalam mendampingi Ibu di mana saja.
				                        </p>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
				</div>

				<div class="modal fade footer-modal-contact" id="modal-asi" tabindex="-1" role="dialog">
				    <div class="modal-dialog" role="document">
				        <div class="modal-content">
				            <div class="modal-body">
				                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				                <h2 class="text-center color-blue">ASI, terbaik bagi bayi</h2>
				                <br />
				                <p class="text-justify">
				                    Air Susu Ibu adalah yang terbaik untuk bayi dan sangat bermanfaat. Penting bahwa dalam persiapan untuk dan selama menyusui, Anda melakukan diet yang sehat dan seimbang. Menggabungkan pemberian ASI dan botol pada minggu pertama kehidupan dapat mengurangi suplai ASI Anda, dan sulit untuk dapat menyusui kembali bila telah berhenti. Konsultasikan kepada dokter, bidan atau ahli medis lainnya untuk nasihat mengenai pemberian makan bayi Anda. Kalau Anda menggunakan formula bayi, Anda harus mengikuti petunjuk fabrikan secara seksama.
				                </p>
				            </div>
				        </div>
				    </div>
				</div>
				    </section>

				`
		}
	}
};

function twnlInitRender() {
	//insert css
	twnlStyle.render();

	let head = document.head || document.getElementsByTagName('head')[0];
    
	let script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = 'https://code.jquery.com/jquery-1.12.4.min.js',
	head.appendChild(script1);	
	
	let script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js',
	head.appendChild(script2);	

    let script3 = document.createElement('script');
    script3.type = 'text/javascript';
    script3.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js',
	head.appendChild(script3);

	// let script10 = document.createElement('script');
	// script10.type = "text/javascript"
	// script10.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
	// head.appendChild(script10);

	let link1 = document.createElement('link');
	link1.rel = 'shortcut icon';
	link1.type = 'image/png';
	link1.href = 'https://www.nutriclub.co.id/Assets/images/favicon.png';
	head.appendChild(link1);

	let link2 = document.createElement('link');
	link2.rel = 'stylesheet';
	link2.href = 'https://www.nutriclub.co.id/Assets/Css/google-fonts.css';
	head.appendChild(link2);

	let link3 = document.createElement('link');
	link3.rel = 'stylesheet';
	link3.href = 'https://www.nutriclub.co.id/Assets/Css/vendor.min.css';
	head.appendChild(link3);

	let link4 = document.createElement('link');
	link4.rel = 'stylesheet';
	link4.href = 'https://www.nutriclub.co.id/Assets/Css/main.css';
	head.appendChild(link4);

	let link5 = document.createElement('link');
	link5.rel = 'stylesheet';
	link5.type = 'text/css';
	link5.href = 'https://www.nutriclub.co.id/assets/css/pages/penyetaraan-field.css';
	head.appendChild(link5);

	// let link7 = document.createElement('link');
	// link7.rel = "stylesheet";
	// link7.type = "text/css"; 
	// link7.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css"
	// head.appendChild(link7);

	// let link8 = document.createElement('link');
	// link8.rel = "stylesheet";
	// link8.type = "text/css";
	// link8.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css"
	// head.appendChild(link8);

	//insert html
	twnlMain.render();
}

(function() {
	twnlInitRender();
})()