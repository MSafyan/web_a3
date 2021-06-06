component InventoryStore{
  provide itemInfo;
}

component StockManagement{
  provide inventoryDetail;
  require itemInfo;
}

component GUI{
  require itemInfo;
  require inventoryDetails
}

component inventrorymanagement{
  inst
    G:GUI
    I:StockManagement;
    S:InventoryStore;
  bind
    I.inventoryDetail--I.inventoryDetail;
    S.itemInfo--I.itemInfo;
    G.itemInfo--I.itemInfo;
}