/*********************************************************************************
------2012.08.01  v0.0------
ǩ������
------2012.08.04  v0.1------
����1:������һ�����ɲ���ǩ����bug
------2012.08.22  v0.2------
����1:���I���ɲ��ָı����ǩ�������
------2012.08.30  v0.3------
����1:�Ż�ǩ��ʱ�䣬ǩ���Ͳ���ǩ�ĸĳɵȴ�1��...
����2:ǩ����������ʾǩ��������
����3:ǩ���������ú�ɫ���ַ���ʾ
------2012.09.01  v0.4------
����1:����ͼƬ�����ɲ���ǩ�������
����2:�޸Ľ�����ѵ�����Ϊ�¿���ǩ��
����3:�޸����б��������ɵ㿪��ǩ��ʱ������Ϊ���ɱ����������ֵ����
------2012.09.02  v0.5------
����1:���ת������ɵ����ӣ�����ǩ��ʧ��ʱ���ֶ�ǩ��
------2012.09.03  v0.6------
����1:���ӱ����������ʾ�쳣����ʾ
------2012.09.25  v0.7------
����1:���ӶԼ���ǩ�����������������ʾ���ظ�ǩ�����ɹ�
------2012.10.15  v0.8------
����1:�޸����ڰٶȸ��µ��µ��ռ�����ʧ������
����2:������ҳ�涥���������ʾ
����3:����������ţ�����鿴ǩ������
------2012.10.15  v0.9------
����1:�޸����ڰٶȸ��µ��µ��ռ�����ʧ������
------2012.11.14  v0.9 patch by misakamm------
����1:����c#��%������ַ�������ǩ�����ɹ���bug
*********************************************************************************/
document.body.style.fontFamily ="΢���ź�";
document.body.style.fontSize ="10pt";
document.body.style.background ="#ffffff";
document.body.innerHTML="";

var ajax=false;
var rewords="";
var ba;
var rt="ok";
var bai;
var bas=[];
var myself="";

if(window.XMLHttpRequest){//��IE��������IE7��IE8��
	ajax=new XMLHttpRequest();
}
else if(window.ActiveXObject){//IE
	var versions=['Microsoft.XMLHTTP', 'MSXML.XMLHTTP', 'Msxml2.XMLHTTP.7.0','Msxml2.XMLHTTP.6.0','Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
	for(var i=0; i<versions.length; i++){
			try{
				ajax=new ActiveXObject(versions[i]);
			}
			catch(e){
				ajax=false;
			}
	}
}
if(ajax==false){
	document.body.innerHTML+="����δ֪���⣬�����ܼ�����ȥ!";
}
else{
	document.body.innerHTML+="�����м����û��ǩ����ȷ�����д��󣬻�ӭ����<a href='http://tieba.baidu.com/p/1768731534'  target='_blank'>���ذɷ���ר����</a><br>";
	
	
	// document.body.innerHTML+="<span style='color:red;'>�����޸��У��ڼ�ʹ�ñ�ǩ�����ܳ��ֹ��ϣ����Ժ�����</span><br>";
	document.body.innerHTML+="<span style='color:red;'>�ر�ע��:�����Զ�ǩ����ʱ�򣬷�����ķ����ͻظ��ٶȣ���ֹӦΪ������Ƶ�����ܺ�гID��</span><br>";
	document.body.innerHTML+="<span style='color:red;'>------2012.10.15  v0.7------</span><br>";
	
	document.body.innerHTML+="<span style='color:red;'>����1:�޸����ڰٶȸ��µ��µ��ռ�����ʧ������</span><br>";
	document.body.innerHTML+="<span style='color:red;'>�ر���ʾ:�벻Ҫ��i����ҳ��ʹ�ñ�ǩ��������㵽�Ǹ����ɵİ���ʹ�ã���ȷ���ѵ�¼��</span><br>";
	document.body.innerHTML+="<span style='color:red;'>------------------------------</span><br>";
	
	document.body.innerHTML+="<span style='color:red;'>��ע1:���ڱ������������ѿռ䣬�����Ϊ��������󣬵��¿ռ�������˹�棬���ԣ���Ҳ����ٱ�վ����ҳ���԰����ԣ��������뵽�������ɷ���ר������ѯ</span><br>";
	document.body.innerHTML+="<span style='color:red;'>��ע2:��ת�ص�ͯЬȥ���ҵĸ���������Ϣ�������������</span><br>";
	document.body.innerHTML+="<span style='color:red;'>��ע3:��л���°��ѽ���</span><a href=\"/i/sys/jump?un=%C8%F6%B5%A9%D2%B2%C0%E4\" target=\"_blank\">@����Ҳ��</a> | <a href=\"/i/sys/jump?un=wangxi3799\" target=\"_blank\">@wangxi3799</a> | <a href=\"/i/sys/jump?un=%D6%BF%B0%AE%B3%C9%A4%CE%DD%E6\" target=\"_blank\">@ֿ���ɤ���</a> | <a href=\"/i/sys/jump?un=%D3%D0%D6%BB%D0%A1F%D8%BC\" target=\"_blank\">@��ֻСFؼ</a>  <br>";

	document.body.innerHTML+="����ʼ����...<br>---��ʼ�ռ�I�����е�����������ȴ� ......<br>";
	whoIam()//��ʼ����
}
function urlreplace(urlStr) {
	return encodeURIComponent(urlStr);
}
function checksigned(urlStr){

	bai++;
	if(bai>ba.length){
		document.body.innerHTML+="<br>ǩ����ϣ������м����û��ǩ����ȷ�����д��󣬻�ӭ����<a href='http://tieba.baidu.com/p/1768731534'  target='_blank'>���ذɷ���ר����</a><br><br><br><br><br>";
		
		document.body.innerHTML="<br><span style='color:red;font-size: 25pt;'>ǩ����ϣ�</span> <br>"+document.body.innerHTML;
		return 0;
	}else{
		document.body.innerHTML+="<br>+"+(bai-1)+" .<a href=\"http://tieba.baidu.com/f?kw="+urlreplace(ba[bai-1])+"&ie=utf-8&tp=0\" target=\"_blank\">"+ba[bai-1]+"��</a>";
	}
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				rewords=ajax.responseText;
				var aa=cutchar(rewords,"<span class=\"sign_index_num j_signin_index\">","</span>");
				var tbs=cutchar(rewords,"PageData.tbs = \"","\";");
				
				if(cutchar(rewords,"PageData.user.is_block = ",";//�Ƿ��ѷ��")=="1"){
					document.body.innerHTML+="--���ڱ���<span style='color:red;'>�����������ǩ��!</span>";
					document.body.innerHTML+="---��ֹ���ܺ�г���ȴ�1s ing...<br>";
					setTimeout("checksigned(\""+ba[bai]+"\");",1000);
					return 0;	
				}
				
				if(rewords.indexOf("<span class=\"sign_index_num j_signin_index\">")<0){
					document.body.innerHTML+="--���ɻ�û����ǩ��ϵͳ!";
					document.body.innerHTML+="---��ֹ���ܺ�г���ȴ�1s ing...<br>";
					setTimeout("checksigned(\""+ba[bai]+"\");",1000);
					return 0;	
				}					
				if(aa=="0"){
					document.body.innerHTML+="--��ûǩ��!";
					signed(ba[bai-1],tbs);
					//alert(rt);
					if(rt=="ok")	var  waittime=6000;
					else if(rt=="err0")	var  waittime=6000;
					else 	var  waittime=6000;
					setTimeout("checksigned(\""+ba[bai]+"\");",waittime);
				}
				else{
					document.body.innerHTML+="--������ǩ��!";
					document.body.innerHTML+="--����,���Ǳ��ɵ� <span style='color:red;'>"+aa+"</span> ��ǩ��!";
					document.body.innerHTML+="---��ֹ���ܺ�г���ȴ�1s ing...<br>";
					setTimeout("checksigned(\""+bas[bai]+"\");",1000);
				}
				return 0;
			}
		}
	};
	if(ajax){
		ajax.open("get", "http://tieba.baidu.com/f?kw="+urlreplace(ba[bai-1])+"&ie=utf-8&tp=0");
		ajax.send(null);
	}else{
		ajax.open("get", "http://tieba.baidu.com/f?kw="+urlreplace(ba[bai-1])+"&ie=utf-8&tp=0", true);
		ajax.send();
	}
}

function signed(urlStr,tbs){
	ajax.onreadystatechange=function(){
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				rewords=ajax.responseText;
				var ranks=cutchar(rewords,"\"user_sign_rank\":",",");
				if(ranks.length<6){
					document.body.innerHTML+="--ǩ�����,���ǵ� <span style='color:red;'>"+ranks+"</span> ��ǩ����...";
					document.body.innerHTML+="---��ֹ���ܺ�г���ȴ�6s ing...<br>";
					rt =  "ok";
				}
				else if(ranks=="r\":\"\\u60a8\\u5c1a\\u5728\\u9ed1\\u540d\\u5355\\u4e2d\\uff0c\\u4e0d\\u80fd\\u64cd\\u4f5c\\u3002\""){
					document.body.innerHTML+="--<span style='color:red;'>�����ں������У����ܲ���.....</span> ";
					document.body.innerHTML+="---��ֹ���ܺ�г���ȴ�1s ing...<br>";
					rt =  "err00";
				}
				else if(anks=="r\":\"\\u5927\\u5bb6\\u90fd\\u5728\\u62a2\\u7b2c1\\uff0c\\u51fa\\u624b\\u6162\\u4e86\\u70b9\\uff0c\\u518d\\u7b7e\\u4e00\\u6b21\\u8bd5\\u8bd5\""){
					document.body.innerHTML+="--<span style='color:red;'>��Ҷ�������1���������˵㣬��ǩһ������</span> --���ڳ�������ǩ��...";
					document.body.innerHTML+="---��ֹ���ܺ�г���ȴ�1s ing...<br>";
					bai--;
					rt =  "err01";
				}
				else if(anks=="r\":\"\\u7b7e\\u5230\\u592a\\u9891\\u7e41\\u4e86\\u70b9\\uff0c\\u4f11\\u606f\\u7247\\u523b\\u518d\\u6765\\u5427\""){
					document.body.innerHTML+="--<span style='color:red;'>ǩ��̫Ƶ���˵㣬��ϢƬ��������...</span> --���ڳ�������ǩ��...";
					document.body.innerHTML+="---��ֹ���ܺ�г���ȴ�1s ing...<br>";
					bai--;
					rt =  "err02";
				}
				else {
					document.body.innerHTML+="--ǩ��ʧ�ܣ��뽫���º�ɫ�Ĵ�����Ϣ�����ֵķ�ʽ������ר����,�Ա�õ������лл���֧�֣� <span style='color:red;'>"+ranks+"</span> ";
					document.body.innerHTML+="---��ֹ���ܺ�г���ȴ�1s ing...<br>";
					rt =  "err";
				}
			}
		}
	};
	

	document.body.innerHTML+="--��ʼǩ��...";
	ajax.open("post","http://tieba.baidu.com/sign/add");
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.send("kw="+urlreplace(urlStr)+"&ie=utf-8&tbs="+tbs);

}

//����������
function countba(){
	ajax.onreadystatechange=function(){
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				rewords=ajax.responseText;
				ba=rewords.split("<a class=\"j_ba_link"); 
				
				for(var i=1;i<ba.length;i++){
					bas[i-1]=cutchar(ba[i],"forum=\"","\"");
					var aa=cutchar(ba[i],">","</a>");
					if(ba[i].indexOf("text_point\"")>=0)
						var aa=cutchar(ba[i],"title=\"","\"");
					ba[i]=aa;	
				}
				document.body.innerHTML+="�������:��ϲ����������"+(ba.length-1)+"�����������ʱ��"+parseInt(ba.length*6/60)+"��"+(ba.length*6%60)+"��";
				
				bai=1;
				checksigned(bas[bai]);
			}
		}
	};
	if(ajax){
		ajax.open("get", "http://tieba.baidu.com/i/"+myself);
		ajax.send(null);
	}else{
		ajax.open("get", "http://tieba.baidu.com/i/"+myself, true);
		ajax.send();
	}
}


//����˭
function whoIam(){
	ajax.onreadystatechange=function(){
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				rewords=ajax.responseText;
				myself=cutchar(rewords,"\"itieba_id\":",",");
				countba();
			}
		}
	};
	if(ajax){
		ajax.open("get", "http://tieba.baidu.com/f?kw=%B2%F5%EA%D8");
		ajax.send(null);
	}else{
		ajax.open("get", "http://tieba.baidu.com/f?kw=%B2%F5%EA%D8", true);
		ajax.send();
	}
}		
		
function cutchar(allstr,prechar,endchar){
	var preposition=allstr.indexOf(prechar)+prechar.length;
	var strlength=allstr.indexOf(endchar,preposition);
	return allstr.substring(preposition,strlength);
}

function isCon(arr, val){
	for(var i=0; i<arr.length; i++){
		if(arr[i] == val)
			return i-1;
	}
	return 0;
}

function changeStr(allstr,cbit,changeStr){ 
	  return allstr.substring(0,cbit)+changeStr+allstr.substring(cbit+1,allstr.length); 
   }

