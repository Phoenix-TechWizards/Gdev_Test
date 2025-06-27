gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDWater_9595PassableObjects1= [];
gdjs.Game_32SceneCode.GDWater_9595PassableObjects2= [];
gdjs.Game_32SceneCode.GDObstacle_9595ImpassableObjects1= [];
gdjs.Game_32SceneCode.GDObstacle_9595ImpassableObjects2= [];
gdjs.Game_32SceneCode.GDViewObjects1= [];
gdjs.Game_32SceneCode.GDViewObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDViewObjects1Objects = Hashtable.newFrom({"View": gdjs.Game_32SceneCode.GDViewObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8841068);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - ((gdjs.Game_32SceneCode.GDPlayerObjects1[i].getWidth()) / 2), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - ((gdjs.Game_32SceneCode.GDPlayerObjects1[i].getHeight()) / 2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("View"), gdjs.Game_32SceneCode.GDViewObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDViewObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://phoenix-techwizards.github.io/TripleWin/", runtimeScene);
}}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDWater_9595PassableObjects1.length = 0;
gdjs.Game_32SceneCode.GDWater_9595PassableObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacle_9595ImpassableObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacle_9595ImpassableObjects2.length = 0;
gdjs.Game_32SceneCode.GDViewObjects1.length = 0;
gdjs.Game_32SceneCode.GDViewObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDWater_9595PassableObjects1.length = 0;
gdjs.Game_32SceneCode.GDWater_9595PassableObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacle_9595ImpassableObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacle_9595ImpassableObjects2.length = 0;
gdjs.Game_32SceneCode.GDViewObjects1.length = 0;
gdjs.Game_32SceneCode.GDViewObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
