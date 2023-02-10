const express = require("express");
const AdminUserRouter = require("./adminUserRouter");
const organizationRouter = require("./organizationRouter");
const OrganizationTypeRouter = require("./organizationTypeRouter");
const JurisdictionRouter = require('./jurisdictionRouter');
const RoleRouter = require("./roleRouter");
const CollectionRouter = require("./collectionRouter");
const CollectiondataFieldRouter = require("./collectionDataFieldRouter");
const CollectionMemberRouter = require("./collectionMemberRouter");
const CollectionRecordRouter = require("./collectionRecordRouter");
const ArchiveRouter = require("./archiveRouter");
const RecordDataRouter = require("./recordDataRouter");
const CollectionArchiveRouter = require("./collectionArchiveRouter");
const PayloadValidateRouter = require("./payloadValidateRouter");
const ActiveCollectionRouter = require("./activeCollectionRouter");
const PermissionModuleRouter = require("./permissionModuleRouter");
const PermissionRouter = require("./permissionRouter");
const PermissionMappingRouter = require("./permissionMappingRouter");
const OptionRouter = require("./optionRouter");
const DeviceTokenRouter = require("./deviceTokenRouter");
const AuthRouter = require("./authRouter");



const routers = (app) => {
  app.use("/organization" , organizationRouter)
  app.use("/organizationtype",OrganizationTypeRouter)
  app.use("/admin" , AdminUserRouter)
  app.use("/jurisdiction",JurisdictionRouter)
  app.use("/role",RoleRouter)
  app.use("/collection",CollectionRouter)
  app.use("/collectionfield" , CollectiondataFieldRouter)
  app.use("/collectionmember" , CollectionMemberRouter)
  app.use("/collectionrecord",CollectionRecordRouter)
  app.use("/archive",ArchiveRouter)
  app.use("/recorddata",RecordDataRouter)
  app.use("/collectionarchive",CollectionArchiveRouter)
  app.use("/payloadvalidate",PayloadValidateRouter)
  app.use("/activecollection",ActiveCollectionRouter)
  app.use("/permissionmodule",PermissionModuleRouter)
  app.use("/permission",PermissionRouter)
  app.use("/permissionmapping",PermissionMappingRouter)
  app.use("/option",OptionRouter)                       
  app.use("/devicetoken",DeviceTokenRouter)                                //Device Token router
  app.use("/auth",AuthRouter)                                             //authentication router
  
}

module.exports = routers;