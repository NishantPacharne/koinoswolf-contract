import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "WOLF OF KOINOS";
  export const SYMBOL: string = "WFK";
  export const MINT_PRICE: u64 = 10000000000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 11100000000;
  export const URI: string = "https://koinoswolf.nyc3.cdn.digitaloceanspaces.com/wolfofkoinos/metadata/";
  export const OWNER: Uint8Array = Base58.decode("1NPvJuEDhjLuW3VbGqAQe4MdSWSB3YWxK1");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1DuJSKXzUdragetboopDVpc6sbdbsFz5FJ");
}