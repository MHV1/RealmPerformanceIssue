//
//  RealmModule.m
//  PerformanceTest
//
//  Created by Milan Herrera on 11.5.2021.
//
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(RealmModule, NSObject)

RCT_EXTERN_METHOD(test:(NSString *)dataJson
                  resolver: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject)
@end
