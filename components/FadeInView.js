import React, {useRef} from 'react'
import {Animated} from 'react-native'


export default FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current 

    React.useEffect(() => {
        Animated
            .timing(fadeAnim, {
            toValue: 1,
            duration: 2000
        })
            .start();
    }, [])


    return (
        <Animated.View 
        style={{
                ...props.style,
                opacity: fadeAnim
            }}>
            {props.children}
        </Animated.View>
    )
}