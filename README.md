# Micro:bit Isobot Line‑Following Robot

<img width="810" height="1080" alt="image" src="https://github.com/user-attachments/assets/09cd6c59-440a-43ce-b0c3-e44fc0b7aa34" />


This repository contains the source code and documentation for a line‑following Isobot robot controlled by a BBC micro:bit, developed as part of a university SULAM (Service Learning Malaysia – University for Society) outreach initiative with a local primary school.

## Project Overview

- Team‑based educational robotics project designed to introduce primary school students to fundamental concepts in electronics, programming, and automation.  
- Utilises a Micro:bit microcontroller, DC motors, an Isobot chassis, and infrared line‑tracking sensors to implement autonomous path‑following behaviour.  
- Conducted in collaboration with university makerspace staff and a partner primary school as part of a structured community engagement programme.

## Role and Responsibilities

- Led the **hardware implementation and deployment** of multiple Isobot units, integrating Micro:bit boards, motor drivers, DC motors, IR sensors, and power modules into complete robotic platforms.  
- Performed **hardware diagnostics and system verification**, identifying and resolving issues related to power fluctuations, loose electrical connections, and sensor alignment to ensure reliable operation during workshops.  
- Managed **logistics and inventory** for all robotic kits, including tracking boards, batteries, chassis components, and spare parts to guarantee full readiness and availability for each student group.  
- Supported **knowledge transfer** by explaining hardware architecture, safe handling procedures, and basic troubleshooting steps to non‑technical participants and assisting facilitators during live demonstrations.

## Technologies and Skills

- Micro:bit microcontrollers and MakeCode‑based embedded programming.  
- Circuit assembly, wiring practices, and hardware troubleshooting for low‑voltage systems.  
- DC motor and motor‑driver integration, including basic PWM‑based speed and direction control.  
- Inventory coordination and field deployment of educational hardware for classroom environments.  
- Application of basic electrical safety principles in a school setting.

## Repository Contents

- MakeCode project files implementing line‑following logic using five IR sensors (digital inputs) and function‑based motor control (e.g., forward, turning, reverse).  
- Configuration notes for sensor placement, threshold tuning, and motor speed adjustment to improve tracking stability on different line‑track layouts.  
- High‑level documentation to enable educators and students to replicate, adapt, and extend the Isobot line‑following platform for STEM activities.

<img width="960" height="1280" alt="image" src="https://github.com/user-attachments/assets/be891017-6893-4b24-a2de-5774e5aef51d" />


## Getting Started

1. **Prepare the hardware**  
   - You will need a Micro:bit board, USB cable, Isobot chassis with motor driver, IR line‑tracking sensors, and a battery pack suitable for your kit.  
   - Assemble the chassis, mount the motors and motor driver, install the Micro:bit, and position the IR sensors at the front underside of the robot facing the track.

2. **Open the MakeCode editor**  
   - Go to the official MakeCode for Micro:bit editor: https://makecode.microbit.org.  
   - Optionally, review the “Getting started with MakeCode” guide for a quick tour of the interface: https://microbit.org/get-started/user-guide/microsoft-makecode.

3. **Import this project**  
   - In MakeCode, click **Home → Import → Import URL**.  
   - Paste this repository’s project URL and select **Import** to load the blocks.

4. **Configure and test in the simulator**  
   - Check the sensor pin assignments (e.g., P12–P16) and motor control pins match your expansion board.  
   - Use the built‑in simulator to verify that the robot logic reacts correctly when sensor values change before flashing the code to the real device.

5. **Download to the Micro:bit**  
   - Connect the Micro:bit to your computer using USB and click **Download** in MakeCode to generate the `.hex` file.  
   - Copy the downloaded file to the MICROBIT drive; the board will reset automatically when flashing completes.

6. **Run on a line‑following track**  
   - Place the robot on a high‑contrast black line on a light background (or vice versa) and turn on the power.  
   - If the robot drifts off the line, adjust sensor thresholds or motor speeds in the MakeCode project and re‑flash until tracking is stable.

<img width="1080" height="810" alt="image" src="https://github.com/user-attachments/assets/97d2a09b-9838-4ab7-92a9-13f1f326432d" />


