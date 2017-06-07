function choice(){
		var arrCities=["北京市","上海市","西安市","重庆市"];
		var arrAreas=[
		 			["大兴区","海淀区","朝阳区"],
		 			["黄浦区","长宁区","静安区"],
		 			["灞桥区","未央区"],
		 			["江北区","渝中区"]
		 		];
		var cities=document.getElementById("cities");
		var areas=document.getElementById("areas");
		var indexX;
		var str="<option value=''>全国</option>";
		for(var i=0;i<arrCities.length;i++){
		 
			str+="<option value="+arrCities[i]+">"+arrCities[i]+"</option>";
			}
	    cities.innerHTML=str;
	    console.log( cities.innerHTML);	
	    
	    cities.onchange=function(){
			var pro=this.value;
			var str="<option value=''>请选择</option>";
			var index=arrCities.indexOf(pro);
			indexX=index;
			if(index==-1){
				return ;
			}
			for(var i=0;i<arrAreas[index].length;i++){
				str+="<option value="+arrAreas[index][i]+">"+arrAreas[index][i]+"</option>";
			}
			areas.innerHTML=str;
		}
	};
	