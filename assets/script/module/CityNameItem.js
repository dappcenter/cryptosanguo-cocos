// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

var CityConfig = require('CityConfig').CityConfig;

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        attackLayer: null,
    },

    init: function(_index, _cityId, parent){
        this.attackLayer = parent;
        this.index = _index;
        this.cityId = _cityId;
        this.node.getChildByName('nameLabel').getComponent(cc.Label).string = CityConfig.features[_cityId].properties.name;
    },

    refreshColor: function (choose){
        if (!choose)
        {
            this.node.getChildByName('bg').color = cc.color(100,100,100);
        }
        else
        {
            this.node.getChildByName('bg').color = cc.color(255,255,0);
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var thiz = this;
        this.node.on("mouseup",function(){
            this.attackLayer.chooseCity(thiz.index);
        },this);
    },

    start () {

    },

    // update (dt) {},
});
