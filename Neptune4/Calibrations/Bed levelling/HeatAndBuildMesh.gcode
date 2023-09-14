; J Blain for Neptune4 printer
; Heatup both beds to 60'C and the Extruder to 205 'C
G90
M82 ; enable motors
M106 S0
M140 S60 ; custom bed temp
M190 S60 ; custom bed temp
M109 S205 T0 ; custom hot end temp 
G28 ; home all axes
BED_MESH_CALIBRATE ; calibrate a BED_MESH_CALIBRATE
;Shutdown everything
G28 X0 ; home X axis
M141 S0 ; custom bed temp
M140 S0 ; turn off bed
M104 S0 ; turn off extruder
M106 S0 ; turn off cooling fan
M84 ; disable motors