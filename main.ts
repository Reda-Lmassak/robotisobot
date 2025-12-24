let i1 = 0
let i2 = 0
let i3 = 0
let i4 = 0
let i5 = 0
function Turn_Right () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 0)
}
function Front_Right () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 180)
}
function Front_Left () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 180)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
}
function Reverse () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Backward, 200)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Backward, 200)
}
function Front () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
}
function turnleft () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 0)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
}
basic.forever(function () {
    i1 = pins.digitalReadPin(DigitalPin.P16)
    i2 = pins.digitalReadPin(DigitalPin.P15)
    i3 = pins.digitalReadPin(DigitalPin.P14)
    i4 = pins.digitalReadPin(DigitalPin.P13)
    i5 = pins.digitalReadPin(DigitalPin.P12)
    if (i1 == 0) {
        turnleft()
    } else if (i2 == 0) {
        Front_Left()
    } else if (i3 == 0) {
        Front()
    } else if (i4 == 0) {
        Front_Right()
    } else if (i5 == 0) {
        Turn_Right()
    } else {
        Reverse()
    }
})
