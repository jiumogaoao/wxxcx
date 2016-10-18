var model=require('model.js');
var api=require('api.js');
var out={};
out.login=function(phone,key,sc,err){
    function sc2(data){
        model.user=data.user
        model.routerList=data.routerList
        model.domainList=data.domainList
        sc();
    }
    api.login(phone,key,sc2,err);
}
out.logout=function(){
    model.user={
        phone:"",
        id:""
    }
    model.routerList={}
    model.domainList={}
}
out.regest=function(phone,key,code,SN,sc,err){
    function sc2(data){
        model.user=data.user
        model.routerList=data.routerList
        model.domainList=data.domainList
        if(SN){
           model.SN=model.scanSN; 
        }
        sc();
    }
    api.regest(phone,key,code,SN,sc2,err);
}
out.getCode=function(phone,sc,err){
    api.getCode(phone,sc,err);
}
out.changePhone=function(phone,code,sc,err){
    function sc2(data){
        model.user.phone=phone;
        sc();
    }
    api.changePhone(model.user.id,phone,code,sc2,err);
}
out.getRouter=function(){
    var list=[];
    for (var i in model.routerList){
        list.push(model.routerList[i]);
    }
    return list;
}
out.addRouter=function(SN,sc,err){
    function sc2(data){
        model.routerList[SN]={SN:SN,name:""};
        model.SN=SN;
        sc();
    }
    api.addRouter(SN,model.user.id,sc2,err);
}
out.getDomain=function(){
    var list=[];
    for (var i in model.domainList){
        list.push(model.domainList[i]);
    }
    return list;
}
out.editDomain=function(id,ip,name,sc,err){
    function sc2(){
        model.domainList[id].ip=ip;
        model.domainList[id].name=name;
        sc();
    }
    api.editDomain(id,ip,name,model.user.id,sc2,err);
}
out.addDomain=function(ip,name,sc,err){
    function sc2(data){
        model.domainList[data.id]={id:data.id,ip:ip,name:name};
        sc();
    }
    api.addDomain(ip,name,sc2,err);
}
out.getQuestion=function(){
    var list=[];
    for (var i in model.questionList){
        list.push(model.questionList[i]);
    }
    return list;
}
out.fedBack=function(text,sc,err){
    function sc2(data){
        model.questionList[data.id]={id:data.id,name:text}
        sc();
    }
    api.fedBack(text,model.user.id,sc2,err);
}
out.getDetail=function(sc,err){
    function sc2(data){
        data.SN=model.SN;
        sc(data);
    }
    api.getDetail(model.SN,sc2,err);
};
out.netSet=function(state,name,key,line,sc,err){
    api.netSet(model.SN,state,name,key,line,sc,err)
};
out.blackList=function(id,sc,err){
    api.blackList(model.SN,id,sc,err)
};
out.outBlack=function(id,sc,err){
    api.outBlack(model.SN,id,sc,err)
};
module.exports = out