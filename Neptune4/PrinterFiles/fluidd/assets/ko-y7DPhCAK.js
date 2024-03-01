var e={app:{bedmesh:{label:{box_scale:"박스 크기",flat_surface:"평면 보이기",mesh_matrix:"메쉬 매트릭스",probed_matrix:"측정된 매트릭스",profile_name:"프로파일 명",remove_profile:"%{name} 프로파일을 제거합니다",scale:"편차값 표시",wireframe:"와이어프레임",base:"바닥",active:"사용중"},msg:{hint:"%{name}이 아닌 다른 항목으로 저장하는 경우에는, %{name} 프로파일을 제거하도록 선택할 수 있습니다",not_found:"적용된 베드 메쉬를 찾을 수 없습니다.",not_loaded:"메쉬가 로드되지 않았습니다"},tooltip:{calibrate:"프로파일을 'default'로 저장하고 신규 캘리브레이션을 시작합니다",delete:"프로파일을 삭제합니다",load:"프로파일 불러오기",save:"캘리브레이션이 된 프로파일을 printer.cfg에 적용합니다",copy_image:"베드 메쉬 이미지 복사"}},chart:{label:{current:"현재 온도",item:"항목",power:"전원",target:"목표 온도",rate_of_change:"변경"},tooltip:{help:"<kbd>쉬프트키</kbd>를 누르고 있으면 확대됩니다.<br />항목을 클릭하면 그래프가 전환됩니다.<br /> 전원을 클릭하면 그래프가 전환됩니다."}},console:{label:{auto_scroll:"자동 스크롤",hide_temp_waits:"온도변화 숨김",flip_layout:"플립 레이아웃"},placeholder:{command:"'TAB'키는 자동완성, 'help'는 명령어 확인 '키보드 화살표'는 history 보기"},tooltip:{help:'명령에 "도움말"을 입력합니다 <br />자동 완성을 위해 <kbd>Tab 키</kbd>를 사용합니다 기록을 위해 <br /> <kbd>&uarr;</kbd>와 <kbd>&darr;</kbd>를 사용합니다'}},endpoint:{error:{cant_connect:"문제가 발생하여 Fluidd가 대상에 연결할 수 없습니다. 이것이 올바른 장치 주소인가요?",cors_error:"CORS 정책에 의해 차단되었습니다. Moonraker 도움말을 참조하세요",cors_note:'이는 당신의 Moonraker 설정을 수정해야 함을 의미할 수 있습니다. <a href="%{url}" target="_blank">여기에서</a> 다중 프린터 설정에 대한 문서를 참조하십시오'},hint:{add_printer:"예) http://fluiddpi.local"},msg:{trouble:'문제가 있습니까? 자세한 정보는 <a href="%{url}" target="_blank">여기를</a> 참조하십시오.'},tooltip:{endpoint_examples:"API URL을 입력하십시오.<br />몇가지 예시는 다음과 같습니다;<br /> <blockquote>http://fluidd.local, http://192.168.1.150</blockquote>"}},endstop:{label:{open:"열림",triggered:"닫힘"},msg:{subtitle:"새로고침 버튼을 사용해서 엔드스탑 상태를 업데이트 합니다."}},file_system:{filters:{label:{print_start_time:"출력된 항목 숨기기",print_start_time_desc:"이미 출력된 항목을 숨깁니다.",moonraker_backup_files:"Moonraker 백업 파일 필터링",rolled_log_files:"롤링된 로그 파일 필터링",klipper_backup_files:"Klipper 백업 파일 필터링",hidden_files_folders:"숨겨진 파일 및 폴더 필터링"}},label:{dir_name:"폴더명",disk_usage:"디스크 사용량",diskinfo:"디스크 정보",downloaded:"다운로드 완료",file_name:"파일명",transfer_rate:"전송 속도",uploaded:"업로드 완료",view_section_documentation:"'%{섹션}' 문서 보기"},msg:{not_found:"파일을 찾을 수 없습니다",processing:"처리중"},title:{add_dir:"폴더 추가",add_file:"파일 추가",download_file:"파일 검색 중",rename_dir:"폴더명 변경",rename_file:"파일명 변경",upload_file:"파일 업로드",go_to_file:"파일로 이동",command_palette:"명령 팔레트",duplicate_file:"파일 복제",duplicate_dir:"디렉토리 복제"},tooltip:{low_on_space:"디스크 공간 부족",root_disabled:"{root}루트를 사용할 수 없습니다. 로그를 확인해 보세요.",items_count:"{count} 항목 | {count} 항목들"},overlay:{drag_files_enqueue:"파일을 여기로 <strong>드래그</strong>하여 대기열에 넣습니다",drag_files_folders_upload:"업로드할 파일과 폴더를 여기로 <strong>끌어다</strong> 놓습니다"},url:{moonraker_telegram_bot_config:"https://github.com/nlef/moonraker-telegram-bot/wiki/Sample-config#%{hash}",moonraker_config:"https://moonraker.readthedocs.io/en/latest/configuration/#%{hash}",klipper_config:"https://www.klipper3d.org/Config_Reference.html#%{hash}",crowsnest_config:"https://crowsnest.mainsail.xyz/configuration/%{hash}-section"}},gcode:{btn:{load_current_file:"현재 파일 불러오기"},label:{current_layer_height:"현재 레이어 높이",follow_progress:"진행상황 따라가기",layer:"레이어",layers:"레이어들",parsed:"분석완료",show_extrusions:"압출 보이기",show_moves:"움직임 보이기",show_next_layer:"다음 레이어 보기",show_previous_layer:"이전 레이어 보기",show_retractions:"리트렉션 보이기",parsing_file:"파일 분석",exclude_object:"개체 제외",show_current_layer:"현재 레이어 표시",show_parts:"부품 표시"},msg:{confirm:'"%{filename}" 파일은 %{size}입니다. 시스템 리소스를 많이 사용할 수 있습니다. 확실합니까?'},overlay:{drag_file_load:"gcode파일을 여기로 <strong>드래그</strong>하세요"}},general:{btn:{add:"추가",add_dir:"폴더 추가",add_file:"파일 추가",add_printer:"프린터 추가",adjust_layout:"대시보드 레이아웃 조정",all:"모두",calibrate:"캘리브레이션",cancel:"취소",clear_profile:"프로파일 적용해제",close:"닫기",config_reference:"설정 참조",download:"다운로드",edit:"수정",exit_layout:"레이아웃 모드 나가기",extrude:"압출",heaters_off:"히터 꺼짐",load_all:"전체 다운로드",more_information:"추가정보",pause:"일시중지",preheat:"예열",presets:"프리셋",preview_gcode:"Gcode 미리보기",quad_gantry_level:"쿼드겐트리 레벨링",reboot:"재부팅",refresh:"새로고침",remove:"제거",remove_all:"모두 제거",rename:"이름 변경",reprint:"재출력",reset_file:"파일 초기화",reset_layout:"레이아웃 초기화",restart_firmware:"펌웨어 재시작",restart_service:"%{service} 재시작",restart_service_klipper:"Klipper 재시작",restart_service_moonraker:"Moonraker 재시작",resume:"재개",retract:"리트랙션",save:"저장",save_as:"다른이름으로 저장",save_restart:"저장&다시시작",send:"Send",set_color:"Set Color",shutdown:"종료",socket_refresh:"강제 새로고침",upload:"업로드",upload_print:"업로드&출력",view:"보기",add_to_queue:"대기열에 추가",auth_unsure:"왜 이런 메시지가 표시되는지 모르시겠어요?",save_config_and_restart:"설정 저장 및 재시작",reload:"리로드",print:"인쇄",delete:"삭제",socket_reconnect:"다시 연결",logout:"로그아웃",recover:"복구",reset_default_layout:"기본 레이아웃 재설정",upload_folder:"폴더 업로드",reset_stats:"통계 초기화",return_dashboard:"대시보드로 돌아가기",snooze:"일시정지",go_to_file:"파일로 이동",set_default_layout:"기본 레이아웃으로 설정",upload_files:"파일 업로드",adjusted:"조정됨",forgot_password:"비밀번호를 잊으셨나요?",create_zip_archive:"ZIP 아카이브 만들기",retry:"재시도",accept:"동의",duplicate:"복제",login:"로그인",filter:"필터",refresh_metadata:"메타데이터 새로 고침",thumbnail_size:"썸네일 크기",job_queue:"작업 대기열",select_columns:"열 선택",abort:"중단",multiply:"곱하기"},error:{app_setup_link:'<a target="_blank" href="%{url}">여기서</a> Fluidd 설치 요구조건을 찾을 수 있습니다',app_warnings_found:"%{appName} 경고 발견.",components_config:'<a target="_blank" href="%{url}">여기서</a> Moonraker 플러그인 설정을 찾을 수 있습니다',failed_components:"Moonraker에서 플러그인에 실패했습니다. 로그를 확인하고 설정을 업데이트 후 Moonraker를 재시작 하십시오."},label:{accel_to_decel:"감속도",acceleration:"가속도",add_camera:"카메라 추가",add_preset:"사전설정 추가",add_user:"Add 사용자",api_key:"Api 키",api_url:"API URL",category:"카테고리",change_password:"비밀번호 변경",clear_all:"모두 지우기",color:"색깔",confirm:"확인",current_password:"현재 비밀번호",disabled_while_printing:"프린팅중 비활성화됨",edit_camera:"카메라 수정",edit_preset:"사전설정 수정",edit_user:"사용자 수정",extrude_length:"압출 길이",extrude_speed:"압출 속도",flow:"필라멘트 공급량",free:"사용가능",high:"높음",host:"호스트",layout:"레이아웃",longest_job:"가장 긴 출력작업",low:"낮음",name:"이름",new_password:"새 비밀번호",no_notifications:"알림 없음",off:"꺼짐",password:"비밀번호",power:"전원",printers:"프린터",progress:"진행상황",requested_speed:"요청 속도",retract_length:"압출 길이",retract_speed:"압출 속도",save_as:"다른이름으로 저장",services:"서비스",speed:"프린팅 속도",sqv:"코너 속도",total_filament:"총 필라멘트 사용량",total_filament_avg:"총 평균 필라멘트 사용량",total_jobs:"총 출력작업 수",total_print_time:"총 출력시간",total_print_time_avg:"총 출력 평균시간",total_time:"총 시간",total_time_avg:"총 평균시간",uncategorized:"카테고리 없음",unretract_speed:"Unretract 속도",used:"사용중",velocity:"속도",visible:"보이기",z_offset:"Z 오프셋",minimum_cruise_ratio:"최소 크루즈 비율",turn_device_off:"%{device} 끄기",screw_name:"스크류 이름",edit_filter:"필터 수정",pause_at_layer:"레이어에서 일시정지",unsaved_changes:"저장되지 않은 변경 사항",cross:"크로스",command:"명령",current_user:"현재 사용자",m117:"M117",on:"켜짐",layer:"레이어",slicer:"슬라이서",all:"모든",edit_category:"카테고리 수정",thumbnail_size:"썸네일 크기",upload_and_print:"업로드 및 인쇄",file_time:"파일",synced_extruder:"동기화된 압출기",pause_at_layer_number:"레이어 번호에서 일시 중지",partial_of_total:"%{total}의 %{partial}",file:"파일",version_sort:"버전 정렬",auth_source:"인증 소스",username:"사용자 이름",screw_index:"스크류 목록",bars:"바",manage_accounts:"계정 관리",screw_number:"스크류 %{index}",moonraker:"Moonraker",pressure_advance:"압력 상승",actual_time:"실제",user_managed_source:"%{source}인증으로 관리되는 사용자",circle:"원",unretract_extra_length:"추가 길이 해제",numeric_prefix_sort:"숫자 순 정렬",finish_time:"마침",total:"합계",range:"범위",add_category:"카테고리 추가",filament:"필라멘트",accepted_screws:"사용 가능한 나사",stepper_enabled:"스테퍼 사용 가능",heaters_busy:"프린터가 현재 사용 중입니다. 히터를 끄면 인쇄가 실패할 수 있습니다.",ldap:"LDAP",turn_device_on:"%{device} 켜기",default:"기본값",smooth_time:"원활한 시간",pause_at_next_layer:"다음 레이어에서 일시 중지",apply_z_offset:"Z_Offset 적용 및 저장",add_filter:"필터 추가",alias:"별칭"},msg:{password_changed:"비밀번호 변경됨",wrong_password:"무언가 잘못되었습니다. 비밀번호가 일치합니까?",bed_screws_adjust:"현재 나사를 크게 조정해야 하는 경우 조정됨을 <b>클릭</b>하고, 그렇지 않은 경우 <b>수락</b>을 클릭하여 계속합니다.",rolledover_logs:"다음 애플리케이션 로그가 롤오버되었습니다: %{applications}",welcome_back:"다시 오신 것을 환영합니다.<br>아래에서 로그인하여 프린터와 연결하세요.",offline_ready:"이제 Fluidd가 오프라인에서 작동할 준비가 되었습니다.",pending_configuration_sections_deleted:"삭제 대상으로 표시된 섹션은 다음과 같습니다",needs_refresh:"새로운 콘텐츠를 사용하려면 <b>리로드</b> 버튼을 클릭하여 업데이트하세요."},simple_form:{error:{arrayofnums:"숫자만 입력 가능합니다",exists:"이미 존재합니다",invalid_url:"잘못된 URL",max:"최대 %{max}",min:"최소 %{min}",min_or_0:"최소 %{min} or 0",password_username:"사용자 이름이 일치하지 않습니다",required:"필수기재",invalid_number:"유효하지 않은 번호",invalid_expression:"유효하지 않은 표현식",invalid_aspect:"유효하지 않은 종횡비",credentials:"유효하지 않은 자격 증명서"},msg:{confirm:"확실합니까?",confirm_reboot_host:"확실합니까? 호스트 시스템이 재부팅됩니다.",confirm_shutdown_host:"확실합니까? 호스트 시스템이 종료됩니다.",confirm_exclude_object:"이 개체를 인쇄에서 제외하시겠습니까?",unsaved_changes:"저장하지 않은 변경 내용이 있습니다. 이 파일을 닫으시겠습니까?",confirm_forcemove_toggle:"확실합니까? 프린터가 손상될 수 있습니다.",confirm_service_stop:"%{name} 서비스를 중지하시겠습니까?",confirm_service_start:"%{name} 서비스를 시작하시겠습니까?",confirm_service_restart:"%{name} 서비스를 다시 시작하시겠습니까?",confirm_power_device_toggle:"확실하신가요? 그러면 이 장치의 전원이 전환됩니다.",confirm_delete:"정말 삭제하시겠습니까? 선택한 항목이 삭제됩니다. | 정말 삭제하시겠습니까? 선택한 항목 {count}가 삭제됩니다.",no_file_preview:"현재 %{name}을(를) 미리 볼 수 없습니다."}},table:{header:{actions:"동작",end_time:"종료 시간",estimated_time:"예상 시간",filament:"필라멘트",filament_used:"사용된 필라멘트",filament_weight_total:"필라멘트 무게",first_layer_bed_temp:"첫 레이어 베드 온도",first_layer_extr_temp:"첫 레이어 익스트루더 온도",first_layer_height:"첫레이어 높이",height:"높이",last_printed:"마지막 출력",layer_height:"레이어 높이",modified:"수정 시간",name:"이름",print_duration:"프린팅 기간",size:"사이즈",slicer:"슬라이서",slicer_version:"슬라이서 버전",start_time:"시작 시간",status:"상태",total_duration:"전체 기간",filament_type:"필라멘트 타입",time_in_queue:"대기시간",chamber_temp:"챔버 온도",time_added:"추가된 시간",filament_name:"필라멘트 이름",nozzle_diameter:"노즐 직경"}},title:{add_printer:"프린터 추가",bedmesh:"베드 메쉬",bedmesh_controls:"베드 메쉬 제어",camera:"카메라",config_files:"설정 파일",configure:"환경설정",console:"명령어 창",endstops:"엔드스탑",fans_outputs:"팬 컨트롤",gcode_preview:"Gcode 미리보기",history:"작업 기록",home:"대시보드",jobs:"작업",limits:"프린터 속도 제한",macros:"매크로",retract:"펌웨어 리트렉션",runout_sensors:"필라멘트 런아웃 센서",settings:"설정",stats:"프린터 상태",system_overview:"시스템 정보",temperature:"온도",tool:"툴헤드",tune:"튜닝",timelapse:"타임랩스",pending_configuration_changes:"보류 중인 구성 변경 사항",add_chart:"차트 추가",other_files:"기타 파일",not_found:"404 Not Found",metrics_explorer:"메트릭스 탐색기",edit_chart:"차트 편집",job_queue:"작업 대기열",diagnostics:"진단",system:"시스템",rollover_logs:"롤오버 로그"},tooltip:{estop:"비상 정지",reload_klipper:"Klipper 설정을 다시 불러 옵니다.",reload_restart_klipper:"Klipper 설정을 다시 불러오고, MCU를 재시작 합니다.",restart_klipper:"Klipper 시스템 서비스를 다시 시작합니다.",file_browser_configuration_help:"파일과 폴더를 여기에서 끌어다 놓아 구성 파일에 복사합니다",managed_by_moonraker:"moonraker 구성으로 관리",run_collector:"집진기 실행",rollover_logs:"롤오버 로그",file_browser_help:'브라우저 외부에서 파일이나 폴더를 끌어다 놓아 여기에 업로드하기<br>파일과 폴더를 하위 폴더 또는 "..."에 끌어다 놓아 이동합니다',browse_metrics:"사용 가능한 메트릭스 찾아보기",notifications:"알림"}},printer:{state:{busy:"바쁨",complete:"완료",idle:"아이들",loading:"로딩중",paused:"일시정지",printing:"출력중",ready:"준비",standby:"대기",cancelled:"취소됨"},title:{printer_status:"프린터 상태"}},setting:{btn:{add_camera:"카메라 추가",add_thermal_preset:"설정온도 추가",add_user:"사용자 추가",reset:"초기화",select_theme:"테마 선택",add_filter:"필터 추가",add_category:"카테고리 추가",add_metric:"메트릭 추가"},camera_type_options:{mjpegadaptive:"MJPEG 적응형",mjpegstream:"MJPEG 스트림",video:"IP 카메라",webrtc_gortc:"WebRTC (go2rtc)",hlsstream:"HLS 스트림",iframe:"HTTP 페이지",webrtc_camera_streamer:"WebRTC (카메라 스트리머)"},label:{all_off:"모두 끄기",all_on:"모두 켜기",camera_flip_x:"수평 반전",camera_flip_y:"수직 반전",camera_stream_type:"스트림 유형",confirm_on_estop:"비상정지시 확인하기",dark_mode:"다크 모드",default_extrude_length:"기본 압출 길이",default_extrude_speed:"기본 압출 속도",default_toolhead_move_length:"기본 툴헤드 이동 길이",default_toolhead_xy_speed:"기본 툴헤드 XY 속도",default_toolhead_z_speed:"기본 툴헤드 Z 속도",draw_background:"배경 그리기",enable:"활성화",enable_notifications:"알림 활성화",extrusion_line_width:"압출 라인 폭",flip_horizontal:"수평 반전",flip_vertical:"수평반전",fps_target:"목표 FPS",gcode_coords:"G코드 좌표 사용",invert_x_control:"X 반전 컨트롤",invert_y_control:"Y 반전 컨트롤",invert_z_control:"Z 반전 컨트롤",language:"표시 언어",move_line_width:"선 너비 이동",primary_color:"주 컬러",printer_name:"프린터 이름",reset:"환경설정 초기화",retraction_icon_size:"리트랙선 아이콘 크기",show_animations:"애니메이션 보이기",theme_preset:"커뮤니티 프리셋",thermal_preset_name:"설정온도명칭",z_adjust_values:"Z 조정 값",camera_url_stream:"카메라 URL 스트림",dotted:"점선",show_relative_humidity:"상대 습도 표시",show_chart:"차트 표시",auto_load_on_print_start:"인쇄 시작 시 파일 자동 로드",none:"없음",show_bed_screws_adjust_dialog_automatically:"베드 나사 조정 대화 상자 자동 표시",draw_origin:"원점 그리기",auto_edit_extensions:"편집 모드에서 자동으로 열리는 확장 프로그램",save_and_restore_view_state:"보기 상태 저장 및 복원",height:"높이",confirm_dirty_editor_close:"저장되지 않은 변경 사항으로 편집기를 닫을 때 확인 필요",confirm_on_power_device_change:"디바이스 전원 변경 시 확인 필요",sections_to_ignore_pending_configuration_changes:"보류 중인 구성 변경을 무시할 섹션",show_barometric_pressure:"기압 표시",fill_opacity:"불투명도 채우기",line_color:"선 색상",optional:"선택 사항",fps_idle_target:"초점이 맞지 않을 때의 FPS Target",metrics:"매트릭스",min:"최소",contains:"포함 사항",enable_xy_homing:"XY Homing 활성화",filter:"필터 | 필터",axes:"축",toolhead_move_distances:"툴 헤드 거리 값",aspect_ratio_format:"[너비 : 높이]",collector:"집진기",camera_fullscreen_action:{rawstream:"Raw 스트림",embed:"매립",title:"전체 화면 실행"},line_style:"선 스타일",show_legend:"범례 표시",show_upload_and_print:"상단 내비게이션에 업로드 및 인쇄 버튼 표시",unit:"단위",show_code_lens:"CodeLens 표시",thermal_preset_gcode:"G코드",type:"타입",last_result:"최종 결과",right_y:"오른쪽 Y축",auto_follow_on_file_load:"파일 로드 진행 상황을 자동으로 추적",toolhead_control_style:"툴헤드 제어 스타일",solid:"솔리드",starts_with:"시작은",icon:"아이콘",max:"최대",to_browser_local_storage:"로컬 저장소를 탐색하려면",default_min_layer_height:"기본 최소 레이어 높이",enable_diagnostics:"진단 활성화",to_browser_session_storage:"세션 저장소를 탐색하려면",fill_color:"색 채우기",power_toggle_in_top_nav:"상단 내비게이션의 전원 전환",auto_load_mobile_on_print_start:"모바일 디바이스에서 파일 자동 로드",show_save_config_and_restart:"상단 내비게이션에 설정 저장 및 재시작 버튼",date_format:"날짜 형식",show_manual_probe_dialog_automatically:"수동 프로브 대화 상자 자동 표시",show_rate_of_change:"온도 변화율 표시",toolhead_xy_move_distances:"툴헤드 XY 거리 값",show_logo_on_background:"배경에 로고 표시",camera_rotate_by:"회전시키다",camera_url_snapshot:"카메라 URL 스냅샷",left_y:"왼쪽 Y축",dashed:"파선",name:"이름",title:"제목",text_sort_order:"텍스트 정렬 순서",aspect_ratio:"화면비",card:"카드",never:"절대",confirm_on_save_config_and_restart:"저장하고 다시 시작하기 전에 보류 중인 구성 변경 사항 검토하기",force_move_toggle_warning:"FORCE_MOVE 활성화 시 확인 필요",time_format:"시간 형식",expression:"표현방법",show_screws_tilt_adjust_dialog_automatically:"나사 기울기 조정 대화 상자 자동 표시",toolhead_z_move_distances:"툴헤드 Z 거리 값",show_gas_resistance:"가스 저항 표시"},timer_options:{duration:"기간만",filament:"필라멘트로 추정",file:"파일로 추정",slicer:"슬라이서"},title:{authentication:"인증",camera:"카메라",gcode_preview:"Gcode 미리보기",general:"일반",macros:"매크로",theme:"테마",thermal_presets:"온도설정",tool:"툴헤드",file_browser:"파일 탐색",file_editor:"파일 편집기",console:"콘솔"},tooltip:{gcode_coords:"대시보드의 툴헤드 위치 대신에 G코드 위치를 사용합니다",theme_disclaimer:"이러한 테마에는 해당 소유자의 지적 재산인 브랜드 이름과 로고가 포함되어 있습니다.<br> 이러한 이름과 로고의 포함은 해당 브랜드의 허가를 받아 이루어졌습니다.<br> 그러나 이러한 테마는 해당 브랜드에서 공식적으로 유지 관리하지 않는다는 점에 유의하세요.<br> 테마와 관련된 문제나 문의 사항은 Fluidd 팀에 문의하시기 바랍니다.<br> 브랜드 이름과 로고의 사용은 장식 및 미적 목적으로만 사용되며, 해당 브랜드와의 공식적인 연관성이나 브랜드에 의한 보증을 암시하지 않습니다.",diagnostics_performance:"[BETA] 진단 정보 로깅이 성능에 영향을 줄 수 있음",show_manual_probe_dialog_automatically:"수동 프로브 도구를 실행하는 경우 도우미 대화상자 자동 표시",show_screws_tilt_adjust_dialog_automatically:"SCREWS_TILT_CALCULATE 도구를 실행하는 경우 자동으로 도우미 대화 상자를 표시",show_bed_screws_adjust_dialog_automatically:"BED_SCREWS_ADJUST 도구를 실행하는 경우 자동으로 도우미 대화상자 표시"},camera_rotate_options:{90:"90°",180:"180°",270:"270°",none:"없음"}},socket:{msg:{connecting:"Moonraker에 접속중...",no_connection:"Moonraker에 연결되지 않습니다. Moonraker의 상태를 확인하거나 새로고침 하십시오."}},system_info:{label:{capacity:"용량",cpu_desc:"CPU 설명",distribution_codename:"코드명",distribution_like:"배포판 Like",distribution_name:"배포판 이름",hardware_desc:"하드웨어 설명",hostname:"호스트명",klipper_load:"Klipper 로드",manufactured:"생산됨",manufacturer:"제조자",mcu_awake:"{mcu} 활성시간",mcu_bandwidth:"{mcu} 대역폭",mcu_load:"{mcu} 로드",model:"CPU 모델",moonraker_load:"Moonraker 로드",processor_desc:"프로세서",product_name:"제품명",serial_number:"시리얼 번호",system_load:"시스템 로드",system_memory:"시스템 메모리",system_utilization:"시스템 사용",total_memory:"총 메모리",mcu_information:"{mcu} 정보",micro_controller:"마이크로 컨트롤러",frequency:"빈도",operating_system:"운영 체제",network:"네트워크",version:"버전",virtualization:"가상화"}},tool:{btn:{home_x:"X",home_y:"Y",home_all:"모든"},tooltip:{extruder_disabled:"보다 온도가 낮아 익스투르더가 비활성화 되었습니다. (%{min}<small>°C</small>)",home_xy:"호밍 XY",home_z:"호밍 Z",select_tool:"도구 % {tool} 선택",manual_probe:"수동 프로브",motors_off:"모터 끄기",tools:"도구",relative_positioning:"상대 위치",absolute_positioning:"절대 위치"},title:{screws_tilt_adjust:"스크류 기울기 조정",bed_screws_adjust:"베드 스크류 조정",manual_probe:"수동 프로브"},label:{stats_max_speed:'<span class="secondary--text">레이어 높이가 </span> %{layerHeight} mm라고 가정할 때 <span class="secondary--text"> </span> 예상 최대 인쇄 속도는 %{estimatedMaxSpeed} mm/s입니다',stats_active_extruder:'<span class="secondary--text">활성 압출기 구성은</span> %{filamentDiameter} mm 직경의 필라멘트 <span class="secondary--text"> 및</span> %{nozzleDiameter} mm 노즐에 대해 설정됩니다',stats_volumetric_flow:'%{extrudeSpeed} mm/s<span class="secondary--text">로 압출하는 경우, 압출기는 </span> 예상 체적 유량인 %{estimatedVolumetricFlow} mm³/s를 제공할 수 있어야 합니다',stats_extruded_length:'%{extrudeFactor} % 유량<span class="secondary--text">으로 필라멘트 %{extrudeLength} mm를 압출하면 </span> 예상 출력 길이가 %{estimatedExtrudedLength} mm가 됩니다'}},version:{btn:{check_for_updates:"업데이트 확인",finish:"마침",update:"업데이트",view_versions:"버전 보기",update_all:"모두 업데이트"},label:{commit_history:"커밋 이력",commits_on:"커밋 대상",committed:"커밋됨",dirty:"변경 상태",invalid:"유효하지 않은 상태",os_packages:"OS 패키지",package_list:"패키지 목록",up_to_date:"최신 상태",updates_available:"업데이트 사용 가능"},status:{finished:"업데이트 완료",updating:"업데이트중..."},title:"소프트웨어 업데이트",tooltip:{commit_history:"커밋 이력",dirty:"마스터가 아닌 또는 유효하지 않은 원점을 나타내거나 헤드가 분리되었습니다",invalid:"저장소의 내부 변경으로 유효하지 않습니다",packages:"패키지",release_notes:"릴리즈 노트"}},spoolman:{label:{first_used:"첫 사용",lot_nr:"로트 번호",remaining_weight:"남은",last_used:"마지막 사용",filament_name:"필라멘트",material:"재질",id:"아이디",device_camera:"장치",comment:"코멘트",location:"위치",vendor:"제조자",change_spool:"스풀 변경"},setting:{auto_open_qr_camera:"QR 코드 감지를 위한 카메라 자동 열기",warn_on_not_enough_filament:"선택한 스풀에 인쇄를 완료하기에 충분한 필라멘트가 남아 있지 않은 경우 경고 표시",prefer_device_camera:"가능한 경우 장치 카메라를 사용하여 QR 코드 감지하기",auto_select_spool_on_match:"QR코드 일치 시 스풀 선택 자동 커밋",show_spool_selection_dialog_on_print_start:"인쇄 시작 시 스풀 선택 대화 상자 표시",warn_on_filament_type_mismatch:"스풀의 필라멘트 유형과 슬라이서에서 선택한 필라멘트 유형이 일치하지 않는 경우 경고 표시"},btn:{scan_code:"코드 스캔",manage_spools:"스풀 관리",select:"선택"},msg:{error:{cors:"카메라 피드에 접근하는 동안 오류가 발생했습니다. 웹캠 서버에서 CORS 접근을 허용하는지 확인하세요.",no_image_data:"카메라 피드에 접근하는 동안 오류가 발생했습니다. 카메라 구성을 확인하거나 다른 카메라 소스를 사용해 보세요.",spool_not_existant:"스캔한 스풀이 데이터베이스에 존재하지 않습니다."},no_filament:"선택한 스풀에 인쇄 작업을 성공적으로 완료하기에 필라멘트가 충분히 남아 있지 않을 수 있습니다. 계속하시겠습니까?",warning:{invalid_spool_id:"이 QR코드에 포함된 스풀 ID가 유효하지 않습니다.",code_not_recognized:"이 코드는 호환되는 QR 코드가 아닌 것 같습니다."},no_required_length:"선택한 파일을 인쇄하는 데 필요한 필라멘트의 양을 알 수 없습니다. 계속하시겠습니까?",info:{howto:"스풀의 QR 코드를 카메라에 보여줍니다. 스풀이 감지되는 즉시 이 창이 닫힙니다."},no_spool:"스풀을 선택하지 않았습니다. 필라멘트 추적 없이 인쇄하시겠습니까?",mismatched_filament:"선택한 필라멘트의 재료가 슬라이서에서 선택한 재료와 일치하지 않습니다. 계속하시겠습니까?",tracking_inactive:"필라멘트 추적이 비활성화되었습니다. 시작하려면 스풀을 선택하세요."},title:{scan_spool:"스풀 스캔",spoolman:"스풀 관리",spool_selection:"스풀 선택"}},timelapse:{setting:{crf:"등속률계수",parkpos:{back_left:"후면 왼쪽",label:"정차시 위치",front_right:"전면 오른쪽",back_right:"후면 오른쪽",custom:"사용자 지정",x_only:"X만 이동",center:"중앙",y_only:"Y 만 이동",front_left:"전면 왼쪽"},targetlength:"목표 길이",previewimage:"썸네일 생성",variable_fps_max:"최대 프레임 속도",mode_layermacro:"레이어 매크로",mode:"모드",park_custom_pos_y:"정차시 Y 위치",park_time:"정차시 시간",stream_delay_compensation:"지연 보상",duplicatelastframe:"마지막 프레임 복제",auto_render:"자동 렌더링",output_framerate:"출력 프레임 속도",gcode_verbose:"자세한 Gcode",enable:"활성화",park_travel_speed:"정차시 이동 속도",park_custom_pos_dz:"정차시 Z-Hop 위치",variable_fps:"가변 FPS",park_retract_distance:"정차시 후퇴 거리",park_extrude_speed:"정차시 압출 속도",park_custom_pos_x:"정차시 X 위치",fw_retract:"펌웨어 철회 사용",variable_fps_min:"최소 프레임 속도",parkhead:"정차시 헤드",hyperlapse_cycle:"하이퍼랩스 주기",saveframes:"프레임 저장",mode_hyperlapse:"하이퍼랩스",park_extrude_distance:"정차시 압출 거리",park_retract_speed:"정차시 후퇴 속도"},btn:{render:"렌더링",save_frames:"프레임 저장"},title:{timelapse_settings:"타임랩스 설정",timelapse_status:"타임랩스 상태",render_settings:"렌더링 설정"},label:{frames:"%{frames} 프레임 | %{frames} 프레임",length:"예상 길이: %{length}",frame:"프레임 | 프레임"},error:{newframe:"타임랩스 프레임 촬영 오류"}},job_queue:{tooltip:{help:"작업에서 파일을 끌어다 놓아 작업 대기열에 추가<br>대기열에 추가된 작업을 위 또는 아래로 끌어다 놓아 작업 순서 조정"},msg:{confirm:"확실합니까? 그러면 전체 프린터 대기열이 지워집니다"},title:{multiply_job:"작업 늘리기 | 작업 늘리기"},label:{number_of_copies:"복사본 수"}},history:{msg:{confirm_jobs:"확실합니까? 그러면 모든 작업이 지워집니다.",confirm_stats:"확실합니까? 그러면 모든 정보가 지워집니다.",confirm:"확실하신가요? 이렇게 하면 모든 기록과 프린터 정보가 지워집니다"}},sensors:{title:{sensors:"센서"}}}};export{e as default};
