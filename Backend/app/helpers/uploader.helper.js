const util = require("util");
const config = require("config");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const request = require('request');
//const ImageUploaderUrl = config.get("image-uploader.dev-url");
const ImageUploaderUrl = config.get("image-uploader.main-url");
//const ImageUploaderDomainUrl  = config.get("image-uploader.dev-domain-url");
const ImageUploaderDomainUrl  = config.get("image-uploader.main-domain-url");


//create request axios
const apiImageUploader = axios.create({
  baseURL: ImageUploaderUrl,
  headers: {
    "Content-Type": "application/json",
  },
});


const loginToImageUplaoder = function () {
  let result = {};
  return new apiImageUploader({
    method: "post",
    url: config.get("image-uploader.login"),
    data: {
      username: config.get("image-uploader.username"),
      password: config.get("image-uploader.password"),
    },
  })
  .then(function (response) {
    result["code"] = response?.status ? response?.status : 400;
    result["data"] = response?.data?.access ? response?.data?.access : null;
    return result;
  })
  .catch(function (error) {
    console.log(error);
    result["code"] = 400;
    result["message"] = error.message
      ? error?.message
      : "internal server error";
    return result;
  });
};

exports.base64_encode = function (file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString("base64");
};

exports.UploadToImageUploader = async function (
  tahun,
  bulan,
  hari,
  foldername,
  imagebase64
) {
  let result = {};
  let token = await loginToImageUplaoder();

  if (token?.code != 200) {
    result["code"] = token?.code ? token?.code : 400;
    result["message"] = token?.message
      ? token?.message
      : "error when login to image uploader server";
    return result;
  } else {
    token = token?.data;
  }

  if (tahun == null || bulan == null || hari == null) {
    result["code"] = 400;
    result["message"] = "tahun / bulan / hari harus dimasukan";
    return result;
  }

  if (_.isEmpty(imagebase64)) {
    result["code"] = 400;
    result["message"] = "image base64 harus dimasukan";
    return result;
  }

  let fullLink = config.get("image-uploader.upload");
  let data = JSON.stringify({
    tahun: tahun,
    bulan: bulan,
    tanggal: hari,
    foldername : foldername,
    File: {
      content: imagebase64,
      name: foldername,
    },
  });
  return new apiImageUploader({
    method: "POST",
    url: fullLink,
    data: data,
    headers: { Authorization: `Bearer ${token}` },
  })
  .then(function (response) {
    result["code"] = response?.status ? response?.status : 400;
    result["message"] =
      response?.status == 200
        ? "Success Upload File"
        : "Error When uploading image";
    result["data"] = response?.data ? response?.data : null;
    return result;
  })
  .catch(function (error) {
    result["code"] = 400;
    result["message"] = error.message
      ? error?.message
      : "Error when uploading image";
    return result;
  });
};

exports.uploadFileToUploader = async function (tahun,bulan,hari,foldername,imagebase64) {
  let result = {};
  let token = await loginToImageUplaoder();

  if (token?.code != 200) {
    result["code"] = token?.code ? token?.code : 400;
    result["message"] = token?.message
      ? token?.message
      : "error when login to image uploader server";
    return result;
  } else {
    token = token?.data;
  }

  if (tahun == null || bulan == null || hari == null) {
    result["code"] = 400;
    result["message"] = "tahun / bulan / hari harus dimasukan";
    return result;
  }

  if (_.isEmpty(imagebase64)) {
    result["code"] = 400;
    result["message"] = "image base64 harus dimasukan";
    return result;
  }

  if (_.isEmpty(foldername)) {
    result["code"] = 400;
    result["message"] = "foldername harus dimasukan";
    return result;
  }

  let fullLink = config.get("image-uploader.uploadfile");
  let data = JSON.stringify({
    tahun: tahun,
    bulan: bulan,
    tanggal: hari,
    foldername : foldername,
    File: {
      content: imagebase64,
      name: foldername,
    },
  });
  return new apiImageUploader({
    method: "POST",
    url: fullLink,
    data: data,
    headers: { Authorization: `Bearer ${token}` },
  })
  .then(function (response) {
    result["code"] = response?.status ? response?.status : 400;
    result["message"] =
      response?.status == 200
        ? "Success Upload File"
        : "Error When uploading image";
    result["data"] = response?.data ? response?.data : null;
    return result;
  })
  .catch(function (error) {
    result["code"] = 400;
    result["message"] = error.message
      ? error?.message
      : "Error when uploading image";
    return result;
  });
};

exports.uploadFileDirectToUploader = async function(kotama,satker,foldername,tahun,bulan,hari,namafile,ext,file){
  let result = {};
  let token = await loginToImageUplaoder();

  if (token?.code != 200) {
    result["code"] = token?.code ? token?.code : 400;
    result["message"] = token?.message ? token?.message: "error when login to image uploader server";
    return result;
  } else {
    token = token?.data;
  }

  if (foldername == null) {
    result["code"] = 400;
    result["message"] = "foldername harus dimasukan";
    return result;
  }

  if (namafile == null) {
    result["code"] = 400;
    result["message"] = "namafile harus dimasukan";
    return result;
  }

  if (ext == null) {
    result["code"] = 400;
    result["message"] = "ext harus dimasukan";
    return result;
  }

  if (kotama == null || satker == null) {
    result["code"] = 400;
    result["message"] = "kotama / satker code harus dimasukan";
    return result;
  }

  if (tahun == null || bulan == null || hari == null) {
    result["code"] = 400;
    result["message"] = "tahun / bulan / hari harus dimasukan";
    return result;
  }

  let fullLink = this.getImageUploaderUrl() + config.get("image-uploader.uploadfilev2");
  console.log(fullLink);

  try{
    let headers = {
      'Content-Type' : 'multipart/form-data',
      'Authorization': 'Bearer ' + token
    }
    return new Promise((resolve) => {
      var r = request.post({ url: fullLink, form: form, headers: headers }, function optionalCallback (err, response, body) {       
        response = JSON.parse(response?.body);
        if(response?.error){
          console.error('upload failed:',err);
          result["code"] = 400;
          result["message"] ="Error When uploading image |" +response?.error;
          resolve(result);
          return
        }
        
        console.log('Upload successful!  Server responded with:', body);
        result["code"] = 200;
        result["message"] ="success";
        result["data"] = response?.data?.[0]?.url ?{
          location:  response?.data?.[0]?.url
        } : null;
        resolve(result);
        return
      });

      var form = r.form()
      form.append('kotama', kotama);
      form.append('satker', satker);
      form.append('foldername', foldername);
      form.append('tahun', tahun);
      form.append('bulan', bulan);
      form.append('tanggal', hari);
      form.append('ext', ext);
      form.append('namafile', namafile);
      form.append('file', fs.createReadStream(file?.path));
     
    }).catch((err) => {
      result['code'] = 400;
      result['message'] = err.message;
      result['data'] = null;
      resolve(result);
      return;
  });
  }catch(error){
    result["code"] = 400;
    result["message"] = error.message ? error?.message: "Error when uploading image";
    return result;
  }
}

exports.getImageUploaderUrl = function(){
    return ImageUploaderUrl;
}

exports.getImageUploaderDomainUrl = function(){
    return ImageUploaderDomainUrl;
}