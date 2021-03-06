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

export class FlowUpdated extends ethereum.Event {
  get params(): FlowUpdated__Params {
    return new FlowUpdated__Params(this);
  }
}

export class FlowUpdated__Params {
  _event: FlowUpdated;

  constructor(event: FlowUpdated) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get receiver(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get flowRate(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get totalSenderFlowRate(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get totalReceiverFlowRate(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get userData(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }
}

export class IConstantFlowAgreementV1__realtimeBalanceOfResult {
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

export class IConstantFlowAgreementV1__getFlowResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class IConstantFlowAgreementV1__getFlowByIDResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class IConstantFlowAgreementV1__getAccountFlowInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class IConstantFlowAgreementV1 extends ethereum.SmartContract {
  static bind(address: Address): IConstantFlowAgreementV1 {
    return new IConstantFlowAgreementV1("IConstantFlowAgreementV1", address);
  }

  realtimeBalanceOf(
    token: Address,
    account: Address,
    time: BigInt
  ): IConstantFlowAgreementV1__realtimeBalanceOfResult {
    let result = super.call(
      "realtimeBalanceOf",
      "realtimeBalanceOf(address,address,uint256):(int256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(time)
      ]
    );

    return new IConstantFlowAgreementV1__realtimeBalanceOfResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_realtimeBalanceOf(
    token: Address,
    account: Address,
    time: BigInt
  ): ethereum.CallResult<IConstantFlowAgreementV1__realtimeBalanceOfResult> {
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
      new IConstantFlowAgreementV1__realtimeBalanceOfResult(
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

  getMaximumFlowRateFromDeposit(token: Address, deposit: BigInt): BigInt {
    let result = super.call(
      "getMaximumFlowRateFromDeposit",
      "getMaximumFlowRateFromDeposit(address,uint256):(int96)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(deposit)
      ]
    );

    return result[0].toBigInt();
  }

  try_getMaximumFlowRateFromDeposit(
    token: Address,
    deposit: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMaximumFlowRateFromDeposit",
      "getMaximumFlowRateFromDeposit(address,uint256):(int96)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(deposit)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getDepositRequiredForFlowRate(token: Address, flowRate: BigInt): BigInt {
    let result = super.call(
      "getDepositRequiredForFlowRate",
      "getDepositRequiredForFlowRate(address,int96):(uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromSignedBigInt(flowRate)
      ]
    );

    return result[0].toBigInt();
  }

  try_getDepositRequiredForFlowRate(
    token: Address,
    flowRate: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getDepositRequiredForFlowRate",
      "getDepositRequiredForFlowRate(address,int96):(uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromSignedBigInt(flowRate)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createFlow(
    token: Address,
    receiver: Address,
    flowRate: BigInt,
    ctx: Bytes
  ): Bytes {
    let result = super.call(
      "createFlow",
      "createFlow(address,address,int96,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromSignedBigInt(flowRate),
        ethereum.Value.fromBytes(ctx)
      ]
    );

    return result[0].toBytes();
  }

  try_createFlow(
    token: Address,
    receiver: Address,
    flowRate: BigInt,
    ctx: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "createFlow",
      "createFlow(address,address,int96,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromSignedBigInt(flowRate),
        ethereum.Value.fromBytes(ctx)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  updateFlow(
    token: Address,
    receiver: Address,
    flowRate: BigInt,
    ctx: Bytes
  ): Bytes {
    let result = super.call(
      "updateFlow",
      "updateFlow(address,address,int96,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromSignedBigInt(flowRate),
        ethereum.Value.fromBytes(ctx)
      ]
    );

    return result[0].toBytes();
  }

  try_updateFlow(
    token: Address,
    receiver: Address,
    flowRate: BigInt,
    ctx: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "updateFlow",
      "updateFlow(address,address,int96,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromSignedBigInt(flowRate),
        ethereum.Value.fromBytes(ctx)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getFlow(
    token: Address,
    sender: Address,
    receiver: Address
  ): IConstantFlowAgreementV1__getFlowResult {
    let result = super.call(
      "getFlow",
      "getFlow(address,address,address):(uint256,int96,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(receiver)
      ]
    );

    return new IConstantFlowAgreementV1__getFlowResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_getFlow(
    token: Address,
    sender: Address,
    receiver: Address
  ): ethereum.CallResult<IConstantFlowAgreementV1__getFlowResult> {
    let result = super.tryCall(
      "getFlow",
      "getFlow(address,address,address):(uint256,int96,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(receiver)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IConstantFlowAgreementV1__getFlowResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  getFlowByID(
    token: Address,
    agreementId: Bytes
  ): IConstantFlowAgreementV1__getFlowByIDResult {
    let result = super.call(
      "getFlowByID",
      "getFlowByID(address,bytes32):(uint256,int96,uint256,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromFixedBytes(agreementId)
      ]
    );

    return new IConstantFlowAgreementV1__getFlowByIDResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_getFlowByID(
    token: Address,
    agreementId: Bytes
  ): ethereum.CallResult<IConstantFlowAgreementV1__getFlowByIDResult> {
    let result = super.tryCall(
      "getFlowByID",
      "getFlowByID(address,bytes32):(uint256,int96,uint256,uint256)",
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
      new IConstantFlowAgreementV1__getFlowByIDResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  getAccountFlowInfo(
    token: Address,
    account: Address
  ): IConstantFlowAgreementV1__getAccountFlowInfoResult {
    let result = super.call(
      "getAccountFlowInfo",
      "getAccountFlowInfo(address,address):(uint256,int96,uint256,uint256)",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(account)]
    );

    return new IConstantFlowAgreementV1__getAccountFlowInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_getAccountFlowInfo(
    token: Address,
    account: Address
  ): ethereum.CallResult<IConstantFlowAgreementV1__getAccountFlowInfoResult> {
    let result = super.tryCall(
      "getAccountFlowInfo",
      "getAccountFlowInfo(address,address):(uint256,int96,uint256,uint256)",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IConstantFlowAgreementV1__getAccountFlowInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  getNetFlow(token: Address, account: Address): BigInt {
    let result = super.call(
      "getNetFlow",
      "getNetFlow(address,address):(int96)",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_getNetFlow(
    token: Address,
    account: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNetFlow",
      "getNetFlow(address,address):(int96)",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  deleteFlow(
    token: Address,
    sender: Address,
    receiver: Address,
    ctx: Bytes
  ): Bytes {
    let result = super.call(
      "deleteFlow",
      "deleteFlow(address,address,address,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromBytes(ctx)
      ]
    );

    return result[0].toBytes();
  }

  try_deleteFlow(
    token: Address,
    sender: Address,
    receiver: Address,
    ctx: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "deleteFlow",
      "deleteFlow(address,address,address,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(receiver),
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

export class CreateFlowCall extends ethereum.Call {
  get inputs(): CreateFlowCall__Inputs {
    return new CreateFlowCall__Inputs(this);
  }

  get outputs(): CreateFlowCall__Outputs {
    return new CreateFlowCall__Outputs(this);
  }
}

export class CreateFlowCall__Inputs {
  _call: CreateFlowCall;

  constructor(call: CreateFlowCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get flowRate(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get ctx(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class CreateFlowCall__Outputs {
  _call: CreateFlowCall;

  constructor(call: CreateFlowCall) {
    this._call = call;
  }

  get newCtx(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class UpdateFlowCall extends ethereum.Call {
  get inputs(): UpdateFlowCall__Inputs {
    return new UpdateFlowCall__Inputs(this);
  }

  get outputs(): UpdateFlowCall__Outputs {
    return new UpdateFlowCall__Outputs(this);
  }
}

export class UpdateFlowCall__Inputs {
  _call: UpdateFlowCall;

  constructor(call: UpdateFlowCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get flowRate(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get ctx(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class UpdateFlowCall__Outputs {
  _call: UpdateFlowCall;

  constructor(call: UpdateFlowCall) {
    this._call = call;
  }

  get newCtx(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class DeleteFlowCall extends ethereum.Call {
  get inputs(): DeleteFlowCall__Inputs {
    return new DeleteFlowCall__Inputs(this);
  }

  get outputs(): DeleteFlowCall__Outputs {
    return new DeleteFlowCall__Outputs(this);
  }
}

export class DeleteFlowCall__Inputs {
  _call: DeleteFlowCall;

  constructor(call: DeleteFlowCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get sender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get receiver(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get ctx(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class DeleteFlowCall__Outputs {
  _call: DeleteFlowCall;

  constructor(call: DeleteFlowCall) {
    this._call = call;
  }

  get newCtx(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}
