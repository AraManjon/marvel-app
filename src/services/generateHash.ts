import md5 from 'js-md5'

export const generateHash = (ts: number, privateKey: string, publicKey: string): string => {

    const hash = md5.create();
    hash.update(ts + privateKey + publicKey);
    return hash.hex()
}