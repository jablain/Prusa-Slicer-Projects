var e={app:{bedmesh:{label:{box_scale:"Skala pudełka",mesh_matrix:"Macierz siatki",active:"aktywny",flat_surface:"Pokaż płaszczyznę",probed_matrix:"Zbadana macierz",profile_name:"Nazwa profilu",remove_profile:"Usuń profil %{name}",scale:"Skala barw",wireframe:"Szkielet",base:"baza"},msg:{hint:"Zapisując profil jako inny niż %{name}, możesz wybrać usunięcie profilu %{name}",not_loaded:"Nie wczytano siatki",not_found:"Nie znaleziono zapisanych siatek stołu."},tooltip:{calibrate:'Rozpoczyna nową kalibrację, zapisując ją jako profil "default"',delete:"Usuń profil",load:"Wczytaj profil",save:"Zapisuje skalibrowany profil do pliku printer.cfg",copy_image:"Skopiuj obraz siatki stołu"}},chart:{label:{current:"Aktualnie",item:"Nazwa",power:"Moc",rate_of_change:"Zmiana",target:"Docelowo"},tooltip:{help:"Przytrzymaj <kbd>Shift</kbd>, aby powiększyć.<br />Kliknij nazwę, aby przełączyć na wykresie.<br />Kliknij na moc, aby przełączyć na wykresie."}},console:{label:{auto_scroll:"Auto. przewijanie",hide_temp_waits:"Ukryj oczekiwania temp.",flip_layout:"Odwrócony układ"},placeholder:{command:"Przycisk TAB do autouzupełniania; wpisz „help” dla komend; użyj strzałek dla historii"},tooltip:{help:'Wprowadź "help", aby uzyskać komendy<br />Użyj <kbd>Tab</kbd> dla autouzupełniania<br />Używaj <kbd>&uarr;</kbd> i <kbd>&darr;</kbd> dla historii poleceń'}},endpoint:{error:{cant_connect:"Coś poszło nie tak i fluidd nie może dotrzeć do celu. Czy to na pewno prawidłowy adres?",cors_error:"zablokowane przez politykę CORS",cors_note:'Może to oznaczać konieczność modyfikacji konfiguracji moonrakera. Zapoznaj się z dokumentacją dotyczącą konfiguracji wielu drukarek <a href="%{url}" target="_blank">tutaj</a>'},hint:{add_printer:"Np. http://fluiddpi.local"},msg:{trouble:'Masz problem? <a href="%{url}" target="_blank">Sprawdź tutaj</a>, aby uzyskać więcej informacji.'},tooltip:{endpoint_examples:"Wprowadź adres API.<br />Przykład:<br /><blockquote>fluidd.local, https://192.168.1.150</blockquote>"}},endstop:{label:{open:"OTWARTY",triggered:"AKTYWOWANY"},msg:{subtitle:"Użyj przycisku odświeżania, aby zaktualizować status krańcówek."}},file_system:{filters:{label:{print_start_time:"Ukryj wydrukowane",print_start_time_desc:"Ukrywa wydrukowane elementy.",hidden_files_folders:"Filtruj ukryte pliki i foldery",rolled_log_files:"Ukryj zarchiwizowane logi",klipper_backup_files:"Filtruj kopie zapasowe Klippera",moonraker_backup_files:"Filtruj pliki kopii zapasowej Moonrakera"}},label:{dir_name:"Nazwa katalogu",disk_usage:"Użycie dysku",diskinfo:"Informacje o dysku",downloaded:"Pobrane",transfer_rate:"Szybkość transferu",uploaded:"Wysłano",view_section_documentation:'Zobacz dokumentację "%{section}"',file_name:"Nazwa pliku"},msg:{not_found:"Brak plików",processing:"Przetwarzanie"},title:{add_dir:"Dodaj katalog",add_file:"Dodaj plik",command_palette:"Panel poleceń",download_file:"Odbieranie pliku",duplicate_dir:"Duplikuj katalog",duplicate_file:"Duplikuj plik",go_to_file:"Idź do pliku",rename_file:"Zmień nazwę pliku",rename_dir:"Zmień nazwę katalogu",upload_file:"Wgrywanie pliku | Wgrywanie plików"},overlay:{drag_files_enqueue:"<strong>Przeciągnij</strong> pliki tutaj, aby umieścić je w kolejce",drag_files_folders_upload:"<strong>Przeciągnij</strong> pliki i foldery tutaj, aby je wgrać"},tooltip:{low_on_space:"Mało miejsca na dysku",root_disabled:"{root} root jest niedostępny. Sprawdź logi.",items_count:"{count} element | {count} elementy(-ów)"},url:{klipper_config:"https://www.klipper3d.org/Config_Reference.html#%{hash}",moonraker_config:"https://moonraker.readthedocs.io/en/latest/configuration/#%{hash}",moonraker_telegram_bot_config:"https://github.com/nlef/moonraker-telegram-bot/wiki/Sample-config#%{hash}",crowsnest_config:"https://crowsnest.mainsail.xyz/configuration/%{hash}-section"}},general:{label:{name:"Nazwa",all:"Wszystkie",clear_all:"Wyczyść wszystko",extrude_speed:"Prędkość wytłaczania",speed:"Prędkość",retract_speed:"Prędkość retrakcji",save_as:"Zapisz jako",requested_speed:"Prędkość",extrude_length:"Długość wytłaczania",synced_extruder:"Zsynchronizowany ekstruder",z_offset:"Przesunięcie Z",heaters_busy:"Drukarka jest obecnie zajęta. Wyłączenie grzałek może spowodować nieudany wydruk.",flow:"Przepływ",pressure_advance:"Pressure Advance",retract_length:"Długość retrakcji",unretract_speed:"Prędkość powrotu retrakcji",unretract_extra_length:"Dodatkowa ilość dla powrotu",accel_to_decel:"Przyśpieszenie do hamowania",acceleration:"Przyspieszenie",smooth_time:"Czas wygładzania",sqv:"Prędkość na rogu kwadratu",velocity:"Szybkość",uncategorized:"Bez kategorii",screw_name:"Nazwa śruby",username:"Nazwa użytkownika",accepted_screws:"Przyjęte śruby",add_camera:"Dodaj kamerę",add_filter:"Dodaj filtr",add_preset:"Dodaj preset",add_user:"Dodaj użytkownika",api_key:"Klucz API",api_url:"Adres API",actual_time:"Aktualny",change_password:"Zmień hasło",color:"Kolor",command:"Komenda",auth_source:"Źródło uwierzytelniania",confirm:"Potwierdź",current_password:"Aktualne hasło",current_user:"Aktualny użytkownik",default:"Domyślne",disabled_while_printing:"Wyłączone podczas drukowania",edit_camera:"Edytuj kamerę",category:"Kategoria",edit_user:"Edytuj użytkownika",filament:"Filament",file:"Plik",finish_time:"Koniec",free:"dostępne",high:"Wysoki",host:"Host",edit_preset:"Edytuj preset",longest_job:"Najdłuższa praca",low:"Niski",manage_accounts:"Zarządzaj kontami",user_managed_source:"Użytkownik zarządzany przez uwierzytelnianie %{source}",m117:"M117",moonraker:"Moonraker",new_password:"Nowe hasło",no_notifications:"Brak powiadomień",layout:"Układ",ldap:"LDAP",edit_filter:"Edytuj filtr",layer:"Warstwa",off:"Wył",on:"Wł",progress:"Postęp",used:"użyte",upload_and_print:"Wgraj i drukuj",numeric_prefix_sort:"Sortuj według prefiksu numerycznego",password:"Hasło",partial_of_total:"%{partial} z %{total}",pause_at_layer:"Pauza na warstwie",printers:"Drukarki",pause_at_next_layer:"Pauza na następnej warstwie",pause_at_layer_number:"Pauza na numerze warstwy",power:"Zasilanie",screw_number:"Śruba %{index}",services:"Usługi",slicer:"Slicer",screw_index:"Indeks śrub",stepper_enabled:"Silnik krokowy włączony",total_filament:"Całkowite użycie filamentu",thumbnail_size:"Rozmiar miniatur",total_filament_avg:"Średnio na wydruk",total_jobs:"Łącznie wydrukowano",total_print_time:"Łączny czas drukowania",total_print_time_avg:"Średnio na wydruk",total_time:"Łączny czas",total_time_avg:"Średnio na wydruk",total:"Minęło",version_sort:"Sortuj według wersji",visible:"Widoczne",turn_device_off:"Wyłącz %{device}",alias:"Alias",apply_z_offset:"Zastosuj i zapisz przesunięcie Z",edit_category:"Edytuj kategorię",add_category:"Dodaj kategorię",unsaved_changes:"Niezapisane zmiany",file_time:"Plik",turn_device_on:"Włącz %{device}",cross:"Krzyż",bars:"Pasek",range:"Zakres",minimum_cruise_ratio:"Minimalne przełożenie",circle:"Koło"},btn:{abort:"Przerwij",add:"Dodaj",add_dir:"Dodaj katalog",add_file:"Dodaj plik",add_printer:"Dodaj drukarkę",add_to_queue:"Dodaj do kolejki",adjust_layout:"Dostosuj układ pulpitu",adjusted:"Korekta",all:"Wszystkie",auth_unsure:"Nie wiesz, dlaczego to widzisz?",calibrate:"Kalibruj",cancel:"Anuluj",accept:"Akceptuj",config_reference:"Pomoc",create_zip_archive:"Utwórz archiwum (.zip)",delete:"Usuń",download:"Pobierz",duplicate:"Duplikuj",edit:"Edytuj",exit_layout:"Wyjdź z trybu edycji",extrude:"Wytłaczaj",filter:"Filtr",clear_profile:"Wyczyść profil",close:"Zamknij",heaters_off:"Wyłącz grzałki",job_queue:"Kolejka",load_all:"Wczytaj wszystko",go_to_file:"Idź do pliku",forgot_password:"Nie pamiętasz hasła?",remove_all:"Usuń wszystko",logout:"Wyloguj",login:"Zaloguj",more_information:"Więcej informacji",retract:"Wycofaj",save_as:"Zapisz jako",preheat:"Rozgrzej",pause:"Wstrzymaj",preview_gcode:"Podgląd G-Code",presets:"Presety",save_config_and_restart:"Zapisz konfigurację i restartuj",rename:"Zmień nazwę",reprint:"Drukuj ponownie",reboot:"Uruchom ponownie",recover:"Przywróć",refresh:"Odśwież",remove:"Usuń",print:"Drukuj",reload:"Przeładuj",reset_layout:"Przywróć na domyślny układ",restart_firmware:"Restart Firmware",reset_file:"Wyczyść plik",reset_default_layout:"Resetuj domyślny układ",restart_service:"Restart %{service}",restart_service_klipper:"Restart Klippera",resume:"Wznów",return_dashboard:"Wróć do pulpitu sterowania",save:"Zapisz",save_restart:"Zapisz i restartuj",restart_service_moonraker:"Restartuj Moonraker",send:"Wyślij",set_color:"Ustaw kolor",set_default_layout:"Ustaw jako domyślny układ",shutdown:"Wyłącz",snooze:"Drzemka",socket_reconnect:"Połącz ponownie",select_columns:"Wybierz kolumny",upload_files:"Wgraj pliki",upload_folder:"Wgraj folder",upload_print:"Wgraj i drukuj",view:"Wyświetl",reset_stats:"Resetuj statystyki",upload:"Wgraj",socket_refresh:"Wymuś odświeżenie",thumbnail_size:"Rozmiar miniatur",quad_gantry_level:"QGL",refresh_metadata:"Odśwież metadane",multiply:"Powiel",retry:"Ponów"},title:{home:"Ekran główny",camera:"Kamera | Kamery",tool:"Narzędzie",console:"Konsola",temperature:"Termika",retract:"Retrakcja z Firmware",limits:"Limity drukarki",macros:"Makra",fans_outputs:"Wentylatory i wyjścia",add_printer:"Dodaj drukarkę",endstops:"Krańcówki",bedmesh_controls:"Kontrola siatki stołu",bedmesh:"Siatka stołu",config_files:"Pliki konfiguracyjne",jobs:"Zadania",other_files:"Inne pliki",history:"Historia",gcode_preview:"Podgląd G-Code",runout_sensors:"Czujniki braku filamentu",tune:"Strojenie",configure:"Konfiguracja",diagnostics:"Diagnostyka",edit_chart:"Edytuj wykres",add_chart:"Dodaj wykres",metrics_explorer:"Eksplorator metryk",not_found:"404 - Nie znaleziono",job_queue:"Kolejka zadań",settings:"Ustawienia",rollover_logs:"Resetuj logi",system:"System",pending_configuration_changes:"Oczekujące zmiany konfiguracji",stats:"Statystyki drukarki",system_overview:"Informacje o systemie",timelapse:"Timelapse"},msg:{offline_ready:"Fluidd jest teraz gotowy do pracy offline.",needs_refresh:"Dostępna jest nowa zawartość, kliknij przycisk <b>Przeładuj</b>, aby zaktualizować.",password_changed:"Hasło zostało zmienione",wrong_password:"Niestety, coś poszło nie tak. Czy hasło jest prawidłowe?",pending_configuration_sections_deleted:"Następujące sekcje zostały oznaczone do usunięcia",welcome_back:"Witaj ponownie.<br>Zaloguj się, aby pozostać w kontakcie z drukarką.",bed_screws_adjust:"Kliknij przycisk <b>Korekta</b>, jeśli konieczna jest znaczna korekta bieżącej śruby; w przeciwnym razie kliknij przycisk <b>Akceptuj</b>, aby kontynuować.",rolledover_logs:"Następujące logi aplikacji zostały zresetowane: %{applications}"},simple_form:{error:{exists:"Już istnieje",credentials:"Nieprawidłowe dane logowania",invalid_number:"Nieprawidłowy numer",invalid_url:"Nieprawidłowy adres URL",invalid_expression:"Nieprawidłowe wyrażenie",arrayofnums:"Tylko liczby",password_username:"Nie można dopasować nazwy użytkownika",min:"Min %{min}",min_or_0:"Min %{min} lub 0",required:"Wymagane",invalid_aspect:"Nieprawidłowy współczynnik proporcji",max:"Maks %{max}"},msg:{confirm_delete:"Na pewno? Spowoduje to usunięcie wybranej pozycji. | Na pewno? Spowoduje to usunięcie {count} wybranych elementów.",confirm:"Na pewno?",confirm_forcemove_toggle:"Czy na pewno? Może to spowodować uszkodzenie drukarki.",confirm_reboot_host:"Czy na pewno? Spowoduje to restart systemu hosta.",confirm_shutdown_host:"Czy na pewno? Spowoduje to zamknięcie systemu hosta.",confirm_service_start:"Czy na pewno chcesz uruchomić usługę %{name}?",confirm_exclude_object:"Czy na pewno chcesz wykluczyć ten obiekt z drukowania?",confirm_service_stop:"Czy na pewno chcesz zatrzymać usługę %{name}?",confirm_power_device_toggle:"Czy na pewno? Spowoduje to przełączenie zasilania tego urządzenia.",unsaved_changes:"Zmiany nie zostały zapisane. Czy na pewno chcesz zamknąć ten plik?",no_file_preview:"Nie można obecnie wyświetlić podglądu %{name}.",confirm_service_restart:"Czy na pewno chcesz zrestartować usługę %{name}?"}},error:{app_warnings_found:"%{appName} - znaleziono ostrzeżenia.",app_setup_link:'Wymagania dotyczące konfiguracji Fluidd można znaleźć <a target="_blank" href="%{url}">tutaj.</a>',failed_components:"Moonraker ma niedziałające wtyczki, sprawdź logi, zaktualizuj konfigurację i uruchom ponownie moonraker.",components_config:'Konfigurację wtyczki Moonrakera można znaleźć <a target="_blank" href="%{url}">tutaj.</a>'},table:{header:{filament_name:"Nazwa filamentu",name:"Nazwa",size:"Rozmiar",modified:"Zmodyfikowano",height:"Wysokość",first_layer_height:"Wysokość pierwszej warstwy",layer_height:"Wysokość warstwy",actions:"Akcje",chamber_temp:"Temp. komory",end_time:"Zakończono",filament:"Filament",filament_type:"Typ filamentu",filament_used:"Użyty filament",filament_weight_total:"Waga filamentu",first_layer_bed_temp:"Temp. stołu pierwszej warstwy",first_layer_extr_temp:"Temp. ekstrudera pierwszej warstwy",last_printed:"Ostatnio drukowano",estimated_time:"Szacowany czas",print_duration:"Czas drukowania",time_added:"Dodany czas",time_in_queue:"Czas w kolejce",slicer:"Slicer",slicer_version:"Wersja slicera",start_time:"Rozpoczęto",status:"Status",nozzle_diameter:"Średnica dyszy",total_duration:"Łączny czas trwania"}},tooltip:{estop:"Awaryjny stop",managed_by_moonraker:"Zarządzane przez konfigurację moonrakera",notifications:"Powiadomienia",reload_klipper:"Przeładuj konfigurację klippera.",reload_restart_klipper:"Przeładowuje konfigurację klippera i restartuje MCU.",restart_klipper:"Restartuje usługę systemową klipper.",run_collector:"Uruchom kolektor",browse_metrics:"Przeglądaj dostępne metryki",rollover_logs:"Resetuj logi",file_browser_configuration_help:"Skopiuj pliki i foldery do Plików Konfiguracyjnych przeciągając je stąd i upuszczając je tam",file_browser_help:'Przeciągnij i upuść pliki lub foldery z poza przeglądarki aby przesłać je tutaj<br>Przenieś pliki i foldery przeciągając je i upuszczając do podfolderów lub ".."'}},gcode:{label:{current_layer_height:"Aktualna wysokość warstwy",exclude_object:"Wyklucz obiekt",follow_progress:"Śledź postęp",layer:"Warstwa",show_extrusions:"Pokaż ekstruzje",show_moves:"Pokaż ruchy",show_next_layer:"Pokaż następną warstwę",show_parts:"Pokaż części",show_previous_layer:"Pokaż poprzednią warstwę",show_retractions:"Pokaż retrakcje",parsing_file:"Analizowanie pliku",layers:"Warstwy",show_current_layer:"Pokaż aktualną warstwę",parsed:"Przeanalizowano"},btn:{load_current_file:"Wczytaj aktualny plik"},msg:{confirm:'Plik "%{filename}" ma rozmiar %{size}, może to wymagać dużej ilości zasobów w systemie. Czy na pewno?'},overlay:{drag_file_load:"<strong>Przeciągnij</strong> plik G-Code tutaj, aby go wczytać"}},tool:{btn:{home_all:"Wszystkie",home_x:"X",home_y:"Y"},tooltip:{home_xy:"Bazuj XY",home_z:"Bazuj Z",motors_off:"Wyłącz silniki",tools:"Narzędzia",absolute_positioning:"Bezwzględne pozycjonowanie",extruder_disabled:"ekstruder jest wyłączony poniżej min_extrude_temp (%{min}<small>°C</small>)",manual_probe:"Sonda ręczna",relative_positioning:"Pozycjonowanie względne",select_tool:"Wybierz narzędzie %{tool}"},title:{bed_screws_adjust:"Regulacja śrub stołu",manual_probe:"Sonda ręczna",screws_tilt_adjust:"Regulacja pochylenia śrubami"},label:{stats_active_extruder:'<span class="secondary--text">Aktywna konfiguracja ekstrudera jest ustawiona na</span> %{filamentDiameter} mm średnicy filamentu <span class="secondary--text">i</span> %{nozzleDiameter} mm dyszy',stats_extruded_length:'Wytłaczanie %{extrudeLength} mm filamentu przy %{extrudeFactor} % przepływu<span class="secondary--text">, zapewni</span> szacowaną długość wyjściową %{estimatedExtrudedLength} mm',stats_volumetric_flow:'Wytłaczając z prędkością %{extrudeSpeed} mm/s<span class="secondary--text">, wytłaczarka powinna być w stanie zapewnić</span> szacunkowy przepływ objętościowy wynoszący %{estimatedVolumetricFlow} mm³/s',stats_max_speed:'<span class="secondary--text">Zakładając</span> %{layerHeight} mm wysokości warstwy<span class="secondary--text">, szacowana maksymalna prędkość drukowania</span> wynosi %{estimatedMaxSpeed} mm/s'}},setting:{title:{camera:"Kamera | Kamery",console:"Konsola",macros:"Makra",tool:"Narzędzie",authentication:"Uwierzytelnienie",file_editor:"Edytor plików",gcode_preview:"Podgląd G-Code",general:"Ogólne",theme:"Motyw",thermal_presets:"Presety termiczne",file_browser:"Przeglądarka plików"},label:{confirm_on_save_config_and_restart:"Sprawdź oczekujące zmiany konfiguracji przed zapisaniem i ponownym uruchomieniem",show_save_config_and_restart:"Przycisk „Zapisz konfigurację i restartuj” w górnym pasku nawigacyjnym",name:"Nazwa",printer_name:"Nazwa drukarki",thermal_preset_name:"Nazwa presetu",show_rate_of_change:"Pokaż tempo zmian temperatury",show_relative_humidity:"Pokaż względną wilgotność",show_barometric_pressure:"Pokaż ciśnienie barometryczne",show_gas_resistance:"Pokaż opór gazu",show_upload_and_print:"Pokaż przycisk „Wgraj i drukuj” w górnym pasku nawigacyjnym",optional:"Opcjonalne",save_and_restore_view_state:"Zapisz i przywróć stan widoku",thermal_preset_gcode:"G-Code",toolhead_move_distances:"Wartości odległości głowicy",height:"Wysokość",to_browser_session_storage:"Do lokalnej pamięci sesji przeglądarki",show_manual_probe_dialog_automatically:"Pokazuj okno ręcznej sondy automatycznie",all_off:"Wszystkie wył",axes:"Osie",aspect_ratio:"Współczynnik proporcji",aspect_ratio_format:"[szerokość : wysokość]",auto_edit_extensions:"Rozszerzenia obsługiwane przez edytor plików",auto_follow_on_file_load:"Automatyczne śledź postępy podczas ładowania pliku",auto_load_on_print_start:"Automatyczne ładuj plik przy rozpoczęciu drukowania",auto_load_mobile_on_print_start:"Automatyczne załaduj plik na urządzeniach mobilnych",all_on:"Wszystkie wł",move_line_width:"Szerokość linii ruchu",camera_flip_x:"Odwróć w poziomie",camera_flip_y:"Odwróć w pionie",camera_fullscreen_action:{title:"Pełnoekranowe działanie",embed:"Osadzone",rawstream:"Surowy strumień"},confirm_on_power_device_change:"Wymagaj potwierdzenia zmian zasilania urządzenia",confirm_dirty_editor_close:"Wymagaj potwierdzenia podczas zamykania edytora z niezapisanymi zmianami",default_toolhead_move_length:"Domyślna długość ruchu głowicy narzędziowej",enable_notifications:"Włącz powiadomienia",filter:"Filtr | Filtry",camera_rotate_by:"Obróć o",camera_stream_type:"Typ strumienia",card:"Karta",collector:"Kolektor",confirm_on_estop:"Wymagaj potwierdzenia zatrzymania awaryjnego",invert_x_control:"Odwróć sterowanie X",invert_y_control:"Odwróć sterowanie Y",invert_z_control:"Odwróć sterowanie Z",language:"Język",last_result:"Ostatni wynik",left_y:"Lewa oś Y",line_color:"Kolor linii",line_style:"Styl linii",min:"Minimum",max:"Maksimum",metrics:"Metryki",never:"Nigdy",none:"Brak",power_toggle_in_top_nav:"Przełącznik zasilania w górnym pasku nawigacyjnym",primary_color:"Główny kolor",reset:"Resetuj ustawienia",retraction_icon_size:"Rozmiar ikony retrakcji",right_y:"Prawa oś Y",contains:"Zawiera",dark_mode:"Tryb ciemny",dashed:"Przerywany",default_extrude_length:"Domyślna długość ekstruzji",default_extrude_speed:"Domyślna prędkość ekstruzji",default_min_layer_height:"Domyślna minimalna wysokość warstwy",default_toolhead_xy_speed:"Domyślna prędkość XY głowicy narzędziowej",default_toolhead_z_speed:"Domyślna prędkość Z głowicy narzędziowej",dotted:"W kropki",draw_background:"Rysuj tło",enable:"Włącz",enable_diagnostics:"Włącz diagnostykę",expression:"Wyrażenie",extrusion_line_width:"Szerokość linii ekstruzji",flip_horizontal:"Odwrócenie w poziomie",flip_vertical:"Odwrócenie w pionie",fill_color:"Kolor wypełnienia",fill_opacity:"Krycie wypełnienia",fps_target:"Docelowe kl./s",fps_idle_target:"Docelowe kl./s, gdy nie ustawiono ostrości",gcode_coords:"Użyj współrzędnych G-Code",icon:"Ikona",show_animations:"Pokaż animacje",show_code_lens:"Pokaż odnośniki do dokumentacji",show_legend:"Pokaż legendę",solid:"Stały",starts_with:"Zaczyna się od",theme_preset:"Preset społeczności",title:"Tytuł",type:"Typ",unit:"Jednostka",date_format:"Format daty",time_format:"Format czasu",text_sort_order:"Kolejność sortowania tekstu",force_move_toggle_warning:"Wymagaj potwierdzenia podczas aktywacji FORCE_MOVE",show_bed_screws_adjust_dialog_automatically:"Pokazuj okno korekcji śrub stołu automatycznie",to_browser_local_storage:"Do lokalnej pamięci przeglądarki",z_adjust_values:"Wartości korekcji Z",camera_url_stream:"Adres URL strumienia wideo kamery",camera_url_snapshot:"Adres URL migawki kamery",toolhead_control_style:"Styl sterowania głowicą narzędziową",toolhead_xy_move_distances:"Wartości odległości XY głowicy narzędziowej",toolhead_z_move_distances:"Wartości odległości Z głowicy narzędziowej",show_chart:"Pokaż wykres",sections_to_ignore_pending_configuration_changes:"Sekcje do ignorowania oczekujących zmian konfiguracji",show_screws_tilt_adjust_dialog_automatically:'Automatycznie wyświetl okno "Regulacja pochylenia śrubami"',draw_origin:"Rysuj początek",enable_xy_homing:"Włącz bazowanie XY",show_logo_on_background:"Pokaż logo w tle"},camera_type_options:{mjpegstream:"Strumień MJPEG",mjpegadaptive:"Adaptacyjny MJPEG",hlsstream:"Strumień HLS",video:"Kamera IP",webrtc_camera_streamer:"WebRTC (camera-streamer)",iframe:"Strona HTTP",webrtc_gortc:"WebRTC (go2rtc)"},btn:{add_thermal_preset:"Dodaj preset",add_user:"Dodaj użytkownika",reset:"Resetuj",select_theme:"Wybierz kolor",add_metric:"Dodaj metrykę",add_camera:"Dodaj kamerę",add_category:"Dodaj kategorię",add_filter:"Dodaj filtr"},tooltip:{diagnostics_performance:"[BETA] Rejestrowanie informacji diagnostycznych może mieć wpływ na wydajność",gcode_coords:"Użyj pozycji G-Code zamiast pozycji głowicy narzędzia na pulpicie nawigacyjnym",show_manual_probe_dialog_automatically:"Automatycznie wyświetla pomocnicze okno, gdy uruchomione jest ręczne sondowanie",show_bed_screws_adjust_dialog_automatically:"Automatycznie wyświetla pomocnicze okno, gdy uruchomione jest narzędzie BED_SCREWS_ADJUST",show_screws_tilt_adjust_dialog_automatically:"Automatycznie wyświetla okno pomocnicze, jeśli uruchomione jest narzędzie SCREWS_TILT_CALCULATE",theme_disclaimer:"Motywy te zawierają nazwy marek i logotypy, które są własnością intelektualną ich właścicieli.<br> Włączenie tych nazw i logo odbywa się za zgodą marek.<br> Należy jednak pamiętać, że te motywy nie są oficjalnie utrzymywane przez odpowiednie marki.<br> Wszelkie problemy lub zapytania związane z tematami należy kierować do zespołu Fluidd.<br> Używanie nazw marek i logo służy wyłącznie celom dekoracyjnym i estetycznym i nie jest sugerowane żadne oficjalne powiązanie z markami ani ich poparcie."},camera_rotate_options:{90:"90°",180:"180°",270:"270°",none:"Brak"},timer_options:{duration:"Tylko czas trwania",filament:"Oszacowanie filamentu",file:"Oszacowanie pliku",slicer:"Slicer"}},printer:{state:{busy:"Zajęta",loading:"Wczytywanie",ready:"Gotowa",idle:"Bezczynna",cancelled:"Anulowano",complete:"Ukończono",paused:"Wstrzymano",standby:"Stan gotowości",printing:"Drukowanie"},title:{printer_status:"Status drukarki"}},system_info:{label:{distribution_codename:"Nazwa kodowa",distribution_name:"Dystrybucja",hostname:"Nazwa hosta",product_name:"Nazwa produktu",cpu_desc:"Opis CPU",frequency:"Częstotliwość",total_memory:"Pamięć RAM",processor_desc:"Procesor",operating_system:"System",network:"Sieć",virtualization:"Wirtualizacja",system_utilization:"Wykorzystanie systemu",mcu_information:"Informacje o {mcu}",micro_controller:"Mikrokontroler",version:"Wersja",manufactured:"Wyprodukowano",capacity:"Pojemność",hardware_desc:"Opis sprzętu",distribution_like:"Dystrybucja typu",klipper_load:"Obciążenie Klippera",manufacturer:"Producent",mcu_awake:"Czas wybudzenia {mcu}",mcu_bandwidth:"Przepustowość {mcu}",mcu_load:"Obciążenie {mcu}",model:"Model CPU",moonraker_load:"Obciążenie Moonrakera",serial_number:"Numer seryjny",system_load:"Obciążenie systemu",system_memory:"Użycie RAMu"}},history:{msg:{confirm:"Czy na pewno? Spowoduje to wyczyszczenie całej historii i statystyk drukarki",confirm_jobs:"Czy na pewno? Spowoduje to wyczyszczenie wszystkich zadań.",confirm_stats:"Czy na pewno? Spowoduje to wyczyszczenie wszystkich statystyk."}},job_queue:{msg:{confirm:"Czy na pewno? Spowoduje to wyczyszczenie całej kolejki drukowania"},title:{multiply_job:"Powiel zadanie | Powiel zadania"},label:{number_of_copies:"Liczba kopii"},tooltip:{help:"Dodaj zadania do kolejki przeciągając pliki z Zadań i upuszczając je tutaj<br>Dostosuj kolejność zadań w kolejce przeciągając je do góry lub w dół"}},version:{label:{commit_history:"Historia zmian",updates_available:"Dostępne aktualizacje",up_to_date:"AKTUALNY",os_packages:"System",commits_on:"zatwierdzenia w",committed:"Zatwierdzono",invalid:"NIEPRAWIDŁOWY",dirty:"BRUDNY",package_list:"Lista pakietów"},btn:{view_versions:"Wyświetl wersje",check_for_updates:"Sprawdź aktualizacje",update:"Aktualizuj",update_all:"Aktualizuj wszystko",finish:"Zakończ"},tooltip:{commit_history:"Historia zatwierdzeń",invalid:"Wskazuje na lokalne zmiany w repozytorium",packages:"Pakiety",release_notes:"Informacje o wydaniu",dirty:"Wskazuje brak powiązania z główną gałęzią (master) lub nieprawidłowe źródło"},status:{finished:"Aktualizacje ukończone",updating:"Aktualizowanie..."},title:"Aktualizacje"},socket:{msg:{no_connection:"Brak połączenia z moonraker. Sprawdź jego status i/lub odśwież.",connecting:"Łączenie z moonraker..."}},timelapse:{title:{timelapse_settings:"Ustawienia timelapse",timelapse_status:"Status timelapse",render_settings:"Ustawienia renderowania"},setting:{enable:"Włączony",auto_render:"Renderuj automatycznie",duplicatelastframe:"Duplikuj ostatnie klatki",fw_retract:"Użyj retrakcji z firmware",gcode_verbose:"Szczegółowy G-Code",mode:"Tryb",mode_layermacro:"Makro warstwy",mode_hyperlapse:"Hiperlapse",hyperlapse_cycle:"Cykl hiperlapse",output_framerate:"Wyjściowe kl./s",park_retract_distance:"Dystans retrakcji parkowania",park_retract_speed:"Szybkość retrakcji parkowania",park_extrude_distance:"Dystans ekstruzji parkowania",park_extrude_speed:"Szybkość ekstruzji parkowania",parkhead:"Parkowanie głowicy",park_time:"Czas parkowania",park_travel_speed:"Szybkość ruchu jałowego parkowania",park_custom_pos_x:"Pozycja X parkowania",park_custom_pos_y:"Pozycja Y parkowania",crf:"Stały współczynnik tempa",park_custom_pos_dz:"Pozycja parkowania skoku Z",parkpos:{label:"Pozycja parkowania",custom:"Niestandardowa",front_left:"Lewy przód",front_right:"Prawy przód",center:"Na środku",back_left:"Lewy tył",back_right:"Prawy tył",x_only:"Przesuń tylko X",y_only:"Przesuń tylko Y"},previewimage:"Generuj miniaturę",saveframes:"Zapisz klatki",stream_delay_compensation:"Kompensacja opóźnienia",targetlength:"Docelowa długość",variable_fps:"Zmienne kl./s",variable_fps_min:"Minimalna ilość kl./s",variable_fps_max:"Maksymalna ilość kl./s"},btn:{render:"Renderuj",save_frames:"Zapisz klatki"},error:{newframe:"Błąd wykonania klatki timelapse"},label:{frames:"%{frames} klatka | %{frames} klatek",length:"Szacowana długość: %{length}",frame:"Klatka | Klatki"}},spoolman:{btn:{scan_code:"Skanuj kod",select:"Wybierz",manage_spools:"Zarządzaj szpulami"},title:{spoolman:"Spoolman",spool_selection:"Wybór szpuli",scan_spool:"Skanuj szpulę"},label:{change_spool:"Zmień szpulę",comment:"Komentarz",filament_name:"Filament",first_used:"Pierwsze użycie",last_used:"Ostatnie użycie",location:"Lokalizacja",material:"Materiał",remaining_weight:"Pozostało",vendor:"Producent",lot_nr:"Nr. partii",device_camera:"Urządzenie",id:"ID"},msg:{no_spool:"Nie wybrano szpuli. Czy na pewno chcesz drukować bez śledzenia filamentu?",no_filament:"Na wybranej szpuli może nie być wystarczającej ilości filamentu, aby pomyślnie ukończyć drukowanie. Czy na pewno chcesz kontynuować?",no_required_length:"Ilość filamentu wymagana do wydrukowania wybranego pliku jest nieznana. Czy chcesz kontynuować?",mismatched_filament:"Materiał wybranego filamentu nie pasuje do materiału wybranego w slicerze. Czy na pewno chcesz kontynuować?",tracking_inactive:"Śledzenie filamentu jest nieaktywne. Wybierz szpulę, aby rozpocząć.",info:{howto:"Pokaż kod QR szpuli do kamery. To okno zostanie zamknięte po wykryciu szpuli."},warning:{code_not_recognized:"Ten kod QR nie jest prawidłowy.",invalid_spool_id:"ID szpuli zawarte w tym kodzie QR jest nieprawidłowe."},error:{spool_not_existant:"Zeskanowana szpula nie istnieje w bazie danych.",no_image_data:"Wystąpił błąd dostępu do transmisji z kamery. Sprawdź jej konfigurację lub spróbuj użyć innego źródła.",cors:"Wystąpił błąd dostępu do transmisji z kamery. Upewnij się, że serwer webcam umożliwia dostęp CORS."}},setting:{auto_open_qr_camera:"Automatyczne otwórz kamerę w celu wykrycia kodu QR",show_spool_selection_dialog_on_print_start:"Pokaż okno dialogowe wyboru szpuli przy rozpoczęciu drukowania",auto_select_spool_on_match:"Automatycznie zatwierdzaj wybór szpuli po dopasowaniu kodu QR",prefer_device_camera:"Użyj kamery urządzenia do wykrywania kodów QR, jeśli jest dostępna",warn_on_not_enough_filament:"Pokaż ostrzeżenie, gdy na wybranej szpuli nie ma wystarczającej ilości filamentu do zakończenia drukowania",warn_on_filament_type_mismatch:"Pokaż ostrzeżenie, gdy typ filamentu wybrany w slicerze i filamentu na szpuli nie jest zgodny"}},sensors:{title:{sensors:"Czujniki"}}}};export{e as default};
