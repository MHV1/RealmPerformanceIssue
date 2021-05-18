//
//  RealmModule.swift
//  PerformanceTest
//
//  Created by Milan Herrera on 11.5.2021.
//

import Foundation
import RealmSwift

class Item: Object {
  @objc dynamic var id: Int = 0
  @objc dynamic var itemId: String?
  @objc dynamic var name: String = ""
  @objc dynamic var category: String?
  @objc dynamic var type: String?
  @objc dynamic var externalId: String?
  @objc dynamic var status: Int = 0
  @objc dynamic var desc: String?
  @objc dynamic var createdTimestamp: String?
  @objc dynamic var updatedTimestamp: String?
  
  override static func primaryKey() -> String? {
    return "id"
  }
  
  convenience init(
    id: Int,
    itemId: String,
    name: String,
    category: String,
    type: String,
    externalId: String,
    status: Int,
    desc: String,
    createdTimestamp: String,
    updatedTimestamp: String
  ) {
    self.init()
    self.id = id
    self.itemId = itemId
    self.name = name
    self.category = category
    self.type = type
    self.externalId = externalId
    self.status = status
    self.desc = desc
    self.createdTimestamp = createdTimestamp
    self.updatedTimestamp = updatedTimestamp
  }
}

@objc(RealmModule)
class RealmModule: NSObject {
  
  @objc func test(
    _ dataJson: String,
    resolver resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) -> Void {
    do {
      let localRealm = try Realm()
      let data = dataJson.data(using: .utf8)!
      
      // TODO: Do serialization logic in the model class.
      let items: [Any] = try JSONSerialization.jsonObject(with: data, options: []) as! [Any]
      
      try localRealm.write {
        for i in items {
          // TODO: Create returns the object inserted. Use "add" instead.
          localRealm.create(Item.self, value: i, update: .all)
        }
      }
      
      resolve("Done")
    } catch let error as NSError {
      reject("error", "Error: \(error)", error)
    }
  }
  
  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
}
