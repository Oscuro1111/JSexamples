
"use strict";


const _extends =(this&&this.__extends)|| function(derive,base){
      for(var p in b){
          if(b.hasOwnProperty(p)){
              derive[p] = base[p];
          }

          function __(){  //constructor function
              this.constructor = d;
          }

          d.prototype = b===null?Object.create(b):((__.prototype=b.prototype),new __());
      }
};

var org=null;  //package name

(
    function(org_){
        var Main;
        (function(_Main){
            /**
            *@class
            */

            var Base = (function(){

                function Base(){}//constructor

                   Base.prototype.work =function(){
                        let a =0;
                        return a;
                    }

                    Base.prototype.doWork =function(){
                        return this.work();
                    }

                    return Base;
                
            })();

            Main.Base =Base;
            Base["__class"] = "org.Main.Base";
           
 
        })(org.Main||(org.Main={}));
    }
)(org||(org={}));