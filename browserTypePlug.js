(function (plug){	

		plug.wlxs       = new Object();

		var SystemParam = {

				 RegExpAgent : 	[
												'MicroMessenger',
												'Alipay',
												'Chrome',
				 ],

				 outSign     : 	[
												'weixin',
												'alipay',
												'chrome',
				 ]
		}
		
		plug.wlxs.getOpenWebPlatformWindow = (function (){

				var browser_user_agent = navigator.userAgent.toLowerCase(); 

				var matchIndex = null;

				var magent    =  SystemParam.RegExpAgent;

				var pattern 	  = RegExp("");

				for(var i in magent ){
							 
							 pattern.compile(magent[i],"i");

							 if( pattern.test(browser_user_agent) ) 
							 { 

									matchIndex = i;

									break;
							 }

				}

				return  function (){
								
								return SystemParam.outSign[matchIndex];
						}

		})();


	})(window);