/* Inspired by Michal Zalecki: https://michalzalecki.com/why-using-localStorage-directly-is-a-bad-idea/ */
export function storageFactory(getStorage: () => Storage): Storage {
  let inMemoryStorage: { [key: string]: string } = {}

  function isSupported(): boolean {
    try {
      const testKey = '__some_random_key_you_are_not_going_to_use__'
      getStorage().setItem(testKey, testKey)
      getStorage().removeItem(testKey)
      return true
    } catch (e) {
      return false
    }
  }

  function clear(): void {
    if (isSupported()) {
      getStorage().clear()
    } else {
      inMemoryStorage = {}
    }
  }

  function getItem(name: string): string | null {
    if (isSupported()) {
      return getStorage().getItem(name)
    }
    if (Object.prototype.hasOwnProperty.call(inMemoryStorage, name)) {
      return inMemoryStorage[name]
    }
    return null
  }

  function key(index: number): string | null {
    if (isSupported()) {
      return getStorage().key(index)
    } else {
      return Object.keys(inMemoryStorage)[index] || null
    }
  }

  function removeItem(name: string): void {
    if (isSupported()) {
      getStorage().removeItem(name)
    } else {
      delete inMemoryStorage[name]
    }
  }

  function setItem(name: string, value: string): void {
    if (isSupported()) {
      getStorage().setItem(name, value)
    } else {
      inMemoryStorage[name] = String(value) // not everyone uses TypeScript
    }
  }

  function length(): number {
    if (isSupported()) {
      return getStorage().length
    } else {
      return Object.keys(inMemoryStorage).length
    }
  }

  return {
    getItem,
    setItem,
    removeItem,
    clear,
    key,
    get length(): number {
      return length()
    },
  }
}
