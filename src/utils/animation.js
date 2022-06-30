export const pageTransition = {
    hidden: {
        opacity: 0, y: 300
    },
    show: {
        opacity: 1, y: 0,
        transition: { duration: .5, when: 'beforeChildren', staggerChildren: .25 }
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
        transition: { duration: .75 }
    }
}

export const photoAnimation = {
    hidden: { scale: 1.5, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: .75 } }
}

export const lineAnimation = {
    hidden: { width: '0%' },
    show: { width: '100%', transition: { duration: 1 } }
}

export const slideAnimation = {
    hidden: { x: '-130%', skew: '45deg' },
    show: { x: '100%', skew: '0deg', transition: { duration: 1 } }
}

export const slideContainer = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: .15, ease: 'easeOut' } }
}