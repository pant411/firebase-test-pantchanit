function generateAddr(payload) {
  if (payload["address"]) {
    if (payload["province"] === "กรุงเทพมหานคร") {
      if(payload["road"]) {
        return `${payload["address"]} ถนน${payload["road"]} แขวง${payload["subDistrict"]} เขต${payload["district"]} ${payload["province"]} ${payload["zipPost"]}`;
      } else {
        return `${payload["address"]} แขวง${payload["subDistrict"]} เขต${payload["district"]} ${payload["province"]} ${payload["zipPost"]}`;
      }
    } else  {
      if(payload["road"]) {
        return `${payload["address"]} ถนน${payload["road"]} ตำบล${payload["subDistrict"]} อำเภอ${payload["district"]} จังหวัด${payload["province"]} ${payload["zipPost"]}`;
      } else {
        return `${payload["address"]} ตำบล${payload["subDistrict"]} อำเภอ${payload["district"]} จังหวัด${payload["province"]} ${payload["zipPost"]}`;
      }
    }    
  } else if (payload["number"]) {
    if (payload["province"] === "กรุงเทพมหานคร") {
      if(payload["road"]) {
        return `${payload["number"]} ถนน${payload["road"]} แขวง${payload["subDistrict"]} เขต${payload["district"]} ${payload["province"]} ${payload["zipPost"]}`;
      } else {
        return `${payload["number"]} แขวง${payload["subDistrict"]} เขต${payload["district"]} ${payload["province"]} ${payload["zipPost"]}`;
      }
    } else  {
      if(payload["road"]) {
        return `${payload["number"]} ถนน${payload["road"]} ตำบล${payload["subDistrict"]} อำเภอ${payload["district"]} จังหวัด${payload["province"]} ${payload["zipPost"]}`;
      } else {
        return `${payload["number"]} ตำบล${payload["subDistrict"]} อำเภอ${payload["district"]} จังหวัด${payload["province"]} ${payload["zipPost"]}`;
      }
    }  
  } else {
    if (payload["province"] === "กรุงเทพมหานคร") {
      if(payload["road"]) {
        return `ถนน${payload["road"]} แขวง${payload["subDistrict"]} เขต${payload["district"]} ${payload["province"]} ${payload["zipPost"]}`;
      } else {
        return `แขวง${payload["subDistrict"]} เขต${payload["district"]} ${payload["province"]} ${payload["zipPost"]}`;
      }
    } else  {
      if(payload["road"]) {
        return `ถนน${payload["road"]} ตำบล${payload["subDistrict"]} อำเภอ${payload["district"]} จังหวัด${payload["province"]} ${payload["zipPost"]}`;
      } else {
        return `ตำบล${payload["subDistrict"]} อำเภอ${payload["district"]} จังหวัด${payload["province"]} ${payload["zipPost"]}`;
      }
    }     
  }


}

export default generateAddr;