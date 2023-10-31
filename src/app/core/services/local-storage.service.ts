import { Injectable } from '@angular/core';

const APP_PREFIX = 'ADM-'

@Injectable()
export class LocalStorageService {

constructor() { }




static loadInitialState() {
  return Object.keys(localStorage).reduce((state: any, storageKey) => {
    if (storageKey.includes(APP_PREFIX)) {
      const stateKeys = storageKey
        .replace(APP_PREFIX, '')
        .toLowerCase()
        .split('.')
        .map((key) =>
          key
            .split('-')
            .map((token, index) =>
              index === 0
                ? token
                : token.charAt(0).toUpperCase() + token.slice(1)
            )
            .join('')
        )
      let currentStateRef = state
      stateKeys.forEach((key, index) => {
        if (index === stateKeys.length - 1) {
          currentStateRef[key] = JSON.parse(
            localStorage.getItem(storageKey) || '{}'
          )
          return
        }
        currentStateRef[key] = currentStateRef[key] || {}
        currentStateRef = currentStateRef[key]
      })
    }
    return state
  }, {})
}
  /**
 * Guarda un valor en el localstorage
 * @param key
 * @param value
 */
   setItem(key: string, value: any) {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value))
  }

  /**
   * Obtiene un item del localstorage
   * @param key
   * @returns
   */
  getItem(key: string) {
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`) || '{}')
  }
    /**
 * Elimina un item del localstorage
 * @param key
 */
removeItem(key: string) {
  localStorage.removeItem(`${APP_PREFIX}${key}`)
}





  /**
   * Prueba que no se presenten ningun problema con el localstorage
   */
  testLocalStorage() {
    const testValue = 'testValue'
    const testKey = 'testKey'
    const errorMessage = 'localStorage did not return expected value'

    this.setItem(testKey, testValue)
    const retrievedValue = this.getItem(testKey)
    this.removeItem(testKey)

    if (retrievedValue !== testValue) {
      throw new Error(errorMessage)
    }
  }

}
