export const pageTransition = {
    hidden: {
        opacity: 0, y: 300
    },
    show: {
        opacity: 1, y: 0,
        transition: { duration: .5, staggerChildren: .25, delay: .25, when: 'beforeChildren' }
    },
    exit: {
        opacity: 0,
        transition: { duration: .5 }
    }
}

export const titleAnimation = {
    hidden: { y: 200 },
    show: {
        y: 0,
        transition: { duration: .75 }
    }
}

export const fade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: .75, ease: 'easeIn', delay: .5 }
    }
}

export const fade2 = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: .75, ease: 'easeIn' }
    }
}

export const photoAnimation = {
    hidden: { scale: 1.5, opacity: 0, transition: { duration: .75 } },
    show: { scale: 1, opacity: 1, transition: { duration: .75 } }
}

export const lineAnimation = {
    hidden: { width: '0%' },
    show: { width: '100%', transition: { duration: 1, delay: .75 } }
}

export const lineAnimation2 = {
    hidden: { width: '0%' },
    show: { width: '100%', transition: { duration: 1 } }
}

export const slideAnimation = {
    hidden: { x: '-150%', skew: '45deg' },
    show: { x: '100%', skew: '0deg', transition: { duration: 1 } }
}

export const slideContainer = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: .15, ease: 'easeOut' } }
}

export const scrollReaveal = {
    hidden: { opacity: 0, scale: 1.2, transition: { duration: .5 } },
    show: { opacity: 1, scale: 1, transition: { duration: .5 } }
}
