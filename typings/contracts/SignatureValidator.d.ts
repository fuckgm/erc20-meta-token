/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface SignatureValidatorInterface extends Interface {
  functions: {};

  events: {};
}

export class SignatureValidator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): SignatureValidator;
  attach(addressOrName: string): SignatureValidator;
  deployed(): Promise<SignatureValidator>;

  on(event: EventFilter | string, listener: Listener): SignatureValidator;
  once(event: EventFilter | string, listener: Listener): SignatureValidator;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): SignatureValidator;
  removeAllListeners(eventName: EventFilter | string): SignatureValidator;
  removeListener(eventName: any, listener: Listener): SignatureValidator;

  interface: SignatureValidatorInterface;

  functions: {
    isValidSignature(
      _signerAddress: string,
      _hash: Arrayish,
      _data: Arrayish,
      _sig: Arrayish
    ): Promise<boolean>;
  };

  filters: {};

  estimate: {};
}
