// 65. 有效数字

function isNumber1(s: string): boolean {
    const n = s.length
    let flag = 0
    let e = -1
    for (let i = 0; i < n; i++) {
        if (!/[0-9+-.eE]/.test(s[i])) {
            return false
        }
        if ((s[i] === '+' || s[i] === '-') && i !== e + 1) {
            return false
        }
        if (s[i] === '.') {
            if (flag >= 1) {
                return false
            } else {
                flag = 1
            }
        }
        if (s[i] === 'e' || s[i] === 'E') {
            if (
                flag === 2 ||
                i === 0 ||
                (i === 1 && (s[i - 1] === '-' || s[i - 1] === '+')) ||
                (flag === 1 &&
                    s[i - 1] === '.' &&
                    (i - 2 < 0 || !/[0-9]/.test(s[i - 2])))
            ) {
                return false
            } else {
                flag = 2
                e = i
            }
        }
    }
    if (
        s[n - 1] === 'e' ||
        s[n - 1] === 'E' ||
        s[n - 1] === '+' ||
        s[n - 1] === '-'
    ) {
        return false
    }
    if (s[n - 1] === '.') {
        if (n - 2 < 0 || !/[0-9]/.test(s[n - 2])) {
            return false
        }
    }
    return true
}

function isNumber2(s: string): boolean {
    enum State {
        STATE_INITIAL = 'STATE_INITIAL',
        STATE_INT_SIGN = 'STATE_INT_SIGN',
        STATE_INTEGER = 'STATE_INTEGER',
        STATE_POINT = 'STATE_POINT',
        STATE_POINT_WITHOUT_INT = 'STATE_POINT_WITHOUT_INT',
        STATE_FRACTION = 'STATE_FRACTION',
        STATE_EXP = 'STATE_EXP',
        STATE_EXP_SIGN = 'STATE_EXP_SIGN',
        STATE_EXP_NUMBER = 'STATE_EXP_NUMBER',
        STATE_END = 'STATE_END'
    }
    enum CharType {
        CHAR_NUMBER = 'CHAR_NUMBER',
        CHAR_EXP = 'CHAR_EXP',
        CHAR_POINT = 'CHAR_POINT',
        CHAR_SIGN = 'CHAR_SIGN',
        CHAR_ILLEGAL = 'CHAR_ILLEGAL'
    }

    const transfer = new Map()
    const initialMap = new Map()
    initialMap.set(CharType.CHAR_NUMBER, State.STATE_INTEGER)
    initialMap.set(CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT)
    initialMap.set(CharType.CHAR_SIGN, State.STATE_INT_SIGN)
    transfer.set(State.STATE_INITIAL, initialMap)
    const intSignMap = new Map()
    intSignMap.set(CharType.CHAR_NUMBER, State.STATE_INTEGER)
    intSignMap.set(CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT)
    transfer.set(State.STATE_INT_SIGN, intSignMap)
    const integerMap = new Map()
    integerMap.set(CharType.CHAR_NUMBER, State.STATE_INTEGER)
    integerMap.set(CharType.CHAR_EXP, State.STATE_EXP)
    integerMap.set(CharType.CHAR_POINT, State.STATE_POINT)
    transfer.set(State.STATE_INTEGER, integerMap)
    const pointMap = new Map()
    pointMap.set(CharType.CHAR_NUMBER, State.STATE_FRACTION)
    pointMap.set(CharType.CHAR_EXP, State.STATE_EXP)
    transfer.set(State.STATE_POINT, pointMap)
    const pointWithoutIntMap = new Map()
    pointWithoutIntMap.set(CharType.CHAR_NUMBER, State.STATE_FRACTION)
    transfer.set(State.STATE_POINT_WITHOUT_INT, pointWithoutIntMap)
    const fractionMap = new Map()
    fractionMap.set(CharType.CHAR_NUMBER, State.STATE_FRACTION)
    fractionMap.set(CharType.CHAR_EXP, State.STATE_EXP)
    transfer.set(State.STATE_FRACTION, fractionMap)
    const expMap = new Map()
    expMap.set(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER)
    expMap.set(CharType.CHAR_SIGN, State.STATE_EXP_SIGN)
    transfer.set(State.STATE_EXP, expMap)
    const expSignMap = new Map()
    expSignMap.set(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER)
    transfer.set(State.STATE_EXP_SIGN, expSignMap)
    const expNumberMap = new Map()
    expNumberMap.set(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER)
    transfer.set(State.STATE_EXP_NUMBER, expNumberMap)

    function toCharType(ch: string): CharType {
        if (/\d/.test(ch)) {
            return CharType.CHAR_NUMBER
        } else if (ch.toLowerCase() === 'e') {
            return CharType.CHAR_EXP
        } else if (ch === '.') {
            return CharType.CHAR_POINT
        } else if (ch === '+' || ch === '-') {
            return CharType.CHAR_SIGN
        } else {
            return CharType.CHAR_ILLEGAL
        }
    }

    let state = State.STATE_INITIAL

    for (let i = 0; i < s.length; i++) {
        const type = toCharType(s[i])
        if (!transfer.get(state).has(type)) {
            return false
        } else {
            state = transfer.get(state).get(type)
        }
    }

    return (
        state === State.STATE_INTEGER ||
        state === State.STATE_POINT ||
        state === State.STATE_FRACTION ||
        state === State.STATE_EXP_NUMBER ||
        state === State.STATE_END
    )
}

;[
    '2',
    '0089',
    '-0.1',
    '+3.14',
    '4.',
    '-.9',
    '2e10',
    '-90E3',
    '3e+7',
    '+6e-1',
    '53.5e93',
    '-123.456e789'
].forEach(s => {
    console.log(isNumber2(s))
})
;['abc', '1a', '1e', 'e3', '99e2.5', '--6', '-+3', '95a54e53'].forEach(s => {
    console.log(isNumber2(s))
})
