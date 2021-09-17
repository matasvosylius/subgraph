// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class IndexCreated extends ethereum.Event {
  get params(): IndexCreated__Params {
    return new IndexCreated__Params(this);
  }
}

export class IndexCreated__Params {
  _event: IndexCreated;

  constructor(event: IndexCreated) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get publisher(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get indexId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get userData(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class IndexSubscribed extends ethereum.Event {
  get params(): IndexSubscribed__Params {
    return new IndexSubscribed__Params(this);
  }
}

export class IndexSubscribed__Params {
  _event: IndexSubscribed;

  constructor(event: IndexSubscribed) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get publisher(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get indexId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get subscriber(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get userData(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class IndexUnitsUpdated extends ethereum.Event {
  get params(): IndexUnitsUpdated__Params {
    return new IndexUnitsUpdated__Params(this);
  }
}

export class IndexUnitsUpdated__Params {
  _event: IndexUnitsUpdated;

  constructor(event: IndexUnitsUpdated) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get publisher(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get indexId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get subscriber(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get units(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get userData(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class IndexUnsubscribed extends ethereum.Event {
  get params(): IndexUnsubscribed__Params {
    return new IndexUnsubscribed__Params(this);
  }
}

export class IndexUnsubscribed__Params {
  _event: IndexUnsubscribed;

  constructor(event: IndexUnsubscribed) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get publisher(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get indexId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get subscriber(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get userData(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class IndexUpdated extends ethereum.Event {
  get params(): IndexUpdated__Params {
    return new IndexUpdated__Params(this);
  }
}

export class IndexUpdated__Params {
  _event: IndexUpdated;

  constructor(event: IndexUpdated) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get publisher(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get indexId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get oldIndexValue(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get newIndexValue(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get totalUnitsPending(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get totalUnitsApproved(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get userData(): Bytes {
    return this._event.parameters[7].value.toBytes();
  }
}

export class SubscriptionApproved extends ethereum.Event {
  get params(): SubscriptionApproved__Params {
    return new SubscriptionApproved__Params(this);
  }
}

export class SubscriptionApproved__Params {
  _event: SubscriptionApproved;

  constructor(event: SubscriptionApproved) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get subscriber(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get publisher(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get indexId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get userData(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class SubscriptionRevoked extends ethereum.Event {
  get params(): SubscriptionRevoked__Params {
    return new SubscriptionRevoked__Params(this);
  }
}

export class SubscriptionRevoked__Params {
  _event: SubscriptionRevoked;

  constructor(event: SubscriptionRevoked) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get subscriber(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get publisher(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get indexId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get userData(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class SubscriptionUnitsUpdated extends ethereum.Event {
  get params(): SubscriptionUnitsUpdated__Params {
    return new SubscriptionUnitsUpdated__Params(this);
  }
}

export class SubscriptionUnitsUpdated__Params {
  _event: SubscriptionUnitsUpdated;

  constructor(event: SubscriptionUnitsUpdated) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get subscriber(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get publisher(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get indexId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get units(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get userData(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class IInstantDistributionAgreementV1__realtimeBalanceOfResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromSignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class IInstantDistributionAgreementV1__getIndexResult {
  value0: boolean;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: boolean, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class IInstantDistributionAgreementV1__calculateDistributionResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class IInstantDistributionAgreementV1__getSubscriptionResult {
  value0: boolean;
  value1: boolean;
  value2: BigInt;
  value3: BigInt;

  constructor(
    value0: boolean,
    value1: boolean,
    value2: BigInt,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class IInstantDistributionAgreementV1__getSubscriptionByIDResult {
  value0: Address;
  value1: BigInt;
  value2: boolean;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: boolean,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class IInstantDistributionAgreementV1__listSubscriptionsResult {
  value0: Array<Address>;
  value1: Array<BigInt>;
  value2: Array<BigInt>;

  constructor(
    value0: Array<Address>,
    value1: Array<BigInt>,
    value2: Array<BigInt>
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigIntArray(this.value2));
    return map;
  }
}

export class IInstantDistributionAgreementV1 extends ethereum.SmartContract {
  static bind(address: Address): IInstantDistributionAgreementV1 {
    return new IInstantDistributionAgreementV1(
      "IInstantDistributionAgreementV1",
      address
    );
  }

  realtimeBalanceOf(
    token: Address,
    account: Address,
    time: BigInt
  ): IInstantDistributionAgreementV1__realtimeBalanceOfResult {
    let result = super.call(
      "realtimeBalanceOf",
      "realtimeBalanceOf(address,address,uint256):(int256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(time)
      ]
    );

    return new IInstantDistributionAgreementV1__realtimeBalanceOfResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_realtimeBalanceOf(
    token: Address,
    account: Address,
    time: BigInt
  ): ethereum.CallResult<
    IInstantDistributionAgreementV1__realtimeBalanceOfResult
  > {
    let result = super.tryCall(
      "realtimeBalanceOf",
      "realtimeBalanceOf(address,address,uint256):(int256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(time)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IInstantDistributionAgreementV1__realtimeBalanceOfResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  agreementType(): Bytes {
    let result = super.call("agreementType", "agreementType():(bytes32)", []);

    return result[0].toBytes();
  }

  try_agreementType(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "agreementType",
      "agreementType():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  createIndex(token: Address, indexId: BigInt, ctx: Bytes): Bytes {
    let result = super.call(
      "createIndex",
      "createIndex(address,uint32,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromBytes(ctx)
      ]
    );

    return result[0].toBytes();
  }

  try_createIndex(
    token: Address,
    indexId: BigInt,
    ctx: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "createIndex",
      "createIndex(address,uint32,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromBytes(ctx)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getIndex(
    token: Address,
    publisher: Address,
    indexId: BigInt
  ): IInstantDistributionAgreementV1__getIndexResult {
    let result = super.call(
      "getIndex",
      "getIndex(address,address,uint32):(bool,uint128,uint128,uint128)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId)
      ]
    );

    return new IInstantDistributionAgreementV1__getIndexResult(
      result[0].toBoolean(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_getIndex(
    token: Address,
    publisher: Address,
    indexId: BigInt
  ): ethereum.CallResult<IInstantDistributionAgreementV1__getIndexResult> {
    let result = super.tryCall(
      "getIndex",
      "getIndex(address,address,uint32):(bool,uint128,uint128,uint128)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IInstantDistributionAgreementV1__getIndexResult(
        value[0].toBoolean(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  calculateDistribution(
    token: Address,
    publisher: Address,
    indexId: BigInt,
    amount: BigInt
  ): IInstantDistributionAgreementV1__calculateDistributionResult {
    let result = super.call(
      "calculateDistribution",
      "calculateDistribution(address,address,uint32,uint256):(uint256,uint128)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return new IInstantDistributionAgreementV1__calculateDistributionResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_calculateDistribution(
    token: Address,
    publisher: Address,
    indexId: BigInt,
    amount: BigInt
  ): ethereum.CallResult<
    IInstantDistributionAgreementV1__calculateDistributionResult
  > {
    let result = super.tryCall(
      "calculateDistribution",
      "calculateDistribution(address,address,uint32,uint256):(uint256,uint128)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IInstantDistributionAgreementV1__calculateDistributionResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  updateIndex(
    token: Address,
    indexId: BigInt,
    indexValue: BigInt,
    ctx: Bytes
  ): Bytes {
    let result = super.call(
      "updateIndex",
      "updateIndex(address,uint32,uint128,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromUnsignedBigInt(indexValue),
        ethereum.Value.fromBytes(ctx)
      ]
    );

    return result[0].toBytes();
  }

  try_updateIndex(
    token: Address,
    indexId: BigInt,
    indexValue: BigInt,
    ctx: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "updateIndex",
      "updateIndex(address,uint32,uint128,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromUnsignedBigInt(indexValue),
        ethereum.Value.fromBytes(ctx)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  distribute(
    token: Address,
    indexId: BigInt,
    amount: BigInt,
    ctx: Bytes
  ): Bytes {
    let result = super.call(
      "distribute",
      "distribute(address,uint32,uint256,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromBytes(ctx)
      ]
    );

    return result[0].toBytes();
  }

  try_distribute(
    token: Address,
    indexId: BigInt,
    amount: BigInt,
    ctx: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "distribute",
      "distribute(address,uint32,uint256,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromBytes(ctx)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  approveSubscription(
    token: Address,
    publisher: Address,
    indexId: BigInt,
    ctx: Bytes
  ): Bytes {
    let result = super.call(
      "approveSubscription",
      "approveSubscription(address,address,uint32,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromBytes(ctx)
      ]
    );

    return result[0].toBytes();
  }

  try_approveSubscription(
    token: Address,
    publisher: Address,
    indexId: BigInt,
    ctx: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "approveSubscription",
      "approveSubscription(address,address,uint32,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromBytes(ctx)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  revokeSubscription(
    token: Address,
    publisher: Address,
    indexId: BigInt,
    ctx: Bytes
  ): Bytes {
    let result = super.call(
      "revokeSubscription",
      "revokeSubscription(address,address,uint32,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromBytes(ctx)
      ]
    );

    return result[0].toBytes();
  }

  try_revokeSubscription(
    token: Address,
    publisher: Address,
    indexId: BigInt,
    ctx: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "revokeSubscription",
      "revokeSubscription(address,address,uint32,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromBytes(ctx)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  updateSubscription(
    token: Address,
    indexId: BigInt,
    subscriber: Address,
    units: BigInt,
    ctx: Bytes
  ): Bytes {
    let result = super.call(
      "updateSubscription",
      "updateSubscription(address,uint32,address,uint128,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromAddress(subscriber),
        ethereum.Value.fromUnsignedBigInt(units),
        ethereum.Value.fromBytes(ctx)
      ]
    );

    return result[0].toBytes();
  }

  try_updateSubscription(
    token: Address,
    indexId: BigInt,
    subscriber: Address,
    units: BigInt,
    ctx: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "updateSubscription",
      "updateSubscription(address,uint32,address,uint128,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromAddress(subscriber),
        ethereum.Value.fromUnsignedBigInt(units),
        ethereum.Value.fromBytes(ctx)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getSubscription(
    token: Address,
    publisher: Address,
    indexId: BigInt,
    subscriber: Address
  ): IInstantDistributionAgreementV1__getSubscriptionResult {
    let result = super.call(
      "getSubscription",
      "getSubscription(address,address,uint32,address):(bool,bool,uint128,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromAddress(subscriber)
      ]
    );

    return new IInstantDistributionAgreementV1__getSubscriptionResult(
      result[0].toBoolean(),
      result[1].toBoolean(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_getSubscription(
    token: Address,
    publisher: Address,
    indexId: BigInt,
    subscriber: Address
  ): ethereum.CallResult<
    IInstantDistributionAgreementV1__getSubscriptionResult
  > {
    let result = super.tryCall(
      "getSubscription",
      "getSubscription(address,address,uint32,address):(bool,bool,uint128,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromAddress(subscriber)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IInstantDistributionAgreementV1__getSubscriptionResult(
        value[0].toBoolean(),
        value[1].toBoolean(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  getSubscriptionByID(
    token: Address,
    agreementId: Bytes
  ): IInstantDistributionAgreementV1__getSubscriptionByIDResult {
    let result = super.call(
      "getSubscriptionByID",
      "getSubscriptionByID(address,bytes32):(address,uint32,bool,uint128,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromFixedBytes(agreementId)
      ]
    );

    return new IInstantDistributionAgreementV1__getSubscriptionByIDResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBoolean(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_getSubscriptionByID(
    token: Address,
    agreementId: Bytes
  ): ethereum.CallResult<
    IInstantDistributionAgreementV1__getSubscriptionByIDResult
  > {
    let result = super.tryCall(
      "getSubscriptionByID",
      "getSubscriptionByID(address,bytes32):(address,uint32,bool,uint128,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromFixedBytes(agreementId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IInstantDistributionAgreementV1__getSubscriptionByIDResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBoolean(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  listSubscriptions(
    token: Address,
    subscriber: Address
  ): IInstantDistributionAgreementV1__listSubscriptionsResult {
    let result = super.call(
      "listSubscriptions",
      "listSubscriptions(address,address):(address[],uint32[],uint128[])",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(subscriber)
      ]
    );

    return new IInstantDistributionAgreementV1__listSubscriptionsResult(
      result[0].toAddressArray(),
      result[1].toBigIntArray(),
      result[2].toBigIntArray()
    );
  }

  try_listSubscriptions(
    token: Address,
    subscriber: Address
  ): ethereum.CallResult<
    IInstantDistributionAgreementV1__listSubscriptionsResult
  > {
    let result = super.tryCall(
      "listSubscriptions",
      "listSubscriptions(address,address):(address[],uint32[],uint128[])",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(subscriber)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IInstantDistributionAgreementV1__listSubscriptionsResult(
        value[0].toAddressArray(),
        value[1].toBigIntArray(),
        value[2].toBigIntArray()
      )
    );
  }

  deleteSubscription(
    token: Address,
    publisher: Address,
    indexId: BigInt,
    subscriber: Address,
    ctx: Bytes
  ): Bytes {
    let result = super.call(
      "deleteSubscription",
      "deleteSubscription(address,address,uint32,address,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromAddress(subscriber),
        ethereum.Value.fromBytes(ctx)
      ]
    );

    return result[0].toBytes();
  }

  try_deleteSubscription(
    token: Address,
    publisher: Address,
    indexId: BigInt,
    subscriber: Address,
    ctx: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "deleteSubscription",
      "deleteSubscription(address,address,uint32,address,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromAddress(subscriber),
        ethereum.Value.fromBytes(ctx)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  claim(
    token: Address,
    publisher: Address,
    indexId: BigInt,
    subscriber: Address,
    ctx: Bytes
  ): Bytes {
    let result = super.call(
      "claim",
      "claim(address,address,uint32,address,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromAddress(subscriber),
        ethereum.Value.fromBytes(ctx)
      ]
    );

    return result[0].toBytes();
  }

  try_claim(
    token: Address,
    publisher: Address,
    indexId: BigInt,
    subscriber: Address,
    ctx: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "claim",
      "claim(address,address,uint32,address,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(publisher),
        ethereum.Value.fromUnsignedBigInt(indexId),
        ethereum.Value.fromAddress(subscriber),
        ethereum.Value.fromBytes(ctx)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class CreateIndexCall extends ethereum.Call {
  get inputs(): CreateIndexCall__Inputs {
    return new CreateIndexCall__Inputs(this);
  }

  get outputs(): CreateIndexCall__Outputs {
    return new CreateIndexCall__Outputs(this);
  }
}

export class CreateIndexCall__Inputs {
  _call: CreateIndexCall;

  constructor(call: CreateIndexCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get indexId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get ctx(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CreateIndexCall__Outputs {
  _call: CreateIndexCall;

  constructor(call: CreateIndexCall) {
    this._call = call;
  }

  get newCtx(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class UpdateIndexCall extends ethereum.Call {
  get inputs(): UpdateIndexCall__Inputs {
    return new UpdateIndexCall__Inputs(this);
  }

  get outputs(): UpdateIndexCall__Outputs {
    return new UpdateIndexCall__Outputs(this);
  }
}

export class UpdateIndexCall__Inputs {
  _call: UpdateIndexCall;

  constructor(call: UpdateIndexCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get indexId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get indexValue(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get ctx(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class UpdateIndexCall__Outputs {
  _call: UpdateIndexCall;

  constructor(call: UpdateIndexCall) {
    this._call = call;
  }

  get newCtx(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class DistributeCall extends ethereum.Call {
  get inputs(): DistributeCall__Inputs {
    return new DistributeCall__Inputs(this);
  }

  get outputs(): DistributeCall__Outputs {
    return new DistributeCall__Outputs(this);
  }
}

export class DistributeCall__Inputs {
  _call: DistributeCall;

  constructor(call: DistributeCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get indexId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get ctx(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class DistributeCall__Outputs {
  _call: DistributeCall;

  constructor(call: DistributeCall) {
    this._call = call;
  }

  get newCtx(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ApproveSubscriptionCall extends ethereum.Call {
  get inputs(): ApproveSubscriptionCall__Inputs {
    return new ApproveSubscriptionCall__Inputs(this);
  }

  get outputs(): ApproveSubscriptionCall__Outputs {
    return new ApproveSubscriptionCall__Outputs(this);
  }
}

export class ApproveSubscriptionCall__Inputs {
  _call: ApproveSubscriptionCall;

  constructor(call: ApproveSubscriptionCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get publisher(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get indexId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get ctx(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class ApproveSubscriptionCall__Outputs {
  _call: ApproveSubscriptionCall;

  constructor(call: ApproveSubscriptionCall) {
    this._call = call;
  }

  get newCtx(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RevokeSubscriptionCall extends ethereum.Call {
  get inputs(): RevokeSubscriptionCall__Inputs {
    return new RevokeSubscriptionCall__Inputs(this);
  }

  get outputs(): RevokeSubscriptionCall__Outputs {
    return new RevokeSubscriptionCall__Outputs(this);
  }
}

export class RevokeSubscriptionCall__Inputs {
  _call: RevokeSubscriptionCall;

  constructor(call: RevokeSubscriptionCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get publisher(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get indexId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get ctx(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class RevokeSubscriptionCall__Outputs {
  _call: RevokeSubscriptionCall;

  constructor(call: RevokeSubscriptionCall) {
    this._call = call;
  }

  get newCtx(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class UpdateSubscriptionCall extends ethereum.Call {
  get inputs(): UpdateSubscriptionCall__Inputs {
    return new UpdateSubscriptionCall__Inputs(this);
  }

  get outputs(): UpdateSubscriptionCall__Outputs {
    return new UpdateSubscriptionCall__Outputs(this);
  }
}

export class UpdateSubscriptionCall__Inputs {
  _call: UpdateSubscriptionCall;

  constructor(call: UpdateSubscriptionCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get indexId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get subscriber(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get units(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get ctx(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class UpdateSubscriptionCall__Outputs {
  _call: UpdateSubscriptionCall;

  constructor(call: UpdateSubscriptionCall) {
    this._call = call;
  }

  get newCtx(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class DeleteSubscriptionCall extends ethereum.Call {
  get inputs(): DeleteSubscriptionCall__Inputs {
    return new DeleteSubscriptionCall__Inputs(this);
  }

  get outputs(): DeleteSubscriptionCall__Outputs {
    return new DeleteSubscriptionCall__Outputs(this);
  }
}

export class DeleteSubscriptionCall__Inputs {
  _call: DeleteSubscriptionCall;

  constructor(call: DeleteSubscriptionCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get publisher(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get indexId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get subscriber(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get ctx(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class DeleteSubscriptionCall__Outputs {
  _call: DeleteSubscriptionCall;

  constructor(call: DeleteSubscriptionCall) {
    this._call = call;
  }

  get newCtx(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get publisher(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get indexId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get subscriber(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get ctx(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get newCtx(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}
