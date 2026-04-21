import { ReferenceEntry } from '../types';

import { theme_bioluminescent } from './entries/theme-bioluminescent';
import { theme_swiss_polarity } from './entries/theme-swiss-polarity';
import { case_study_imprint } from './entries/case-study-imprint';
import { case_study_linear } from './entries/case-study-linear';
import { case_study_duolingo } from './entries/case-study-duolingo';
import { case_study_airbnb } from './entries/case-study-airbnb';
import { glassmorphism } from './entries/glassmorphism';
import { mystery_meat_navigation } from './entries/mystery-meat-navigation';
import { scroll_jacking } from './entries/scroll-jacking';
import { gestalt_proximity } from './entries/gestalt-proximity';
import { gestalt_common_region } from './entries/gestalt-common-region';
import { visual_essays } from './entries/visual-essays';
import { bento_grids } from './entries/bento-grids';
import { gradient_mesh } from './entries/gradient-mesh';
import { optimistic_ui } from './entries/optimistic-ui';
import { micro_interactions } from './entries/micro-interactions';
import { skeleton_screens } from './entries/skeleton-screens';
import { fluid_motion } from './entries/fluid-motion';
import { scroll_animations } from './entries/scroll-animations';
import { contextual_glossary } from './entries/contextual-glossary';
import { mastery_paths } from './entries/mastery-paths';
import { confidence_checks } from './entries/confidence-checks';
import { cognitive_chunking } from './entries/cognitive-chunking';
import { adaptive_scaffolding } from './entries/adaptive-scaffolding';
import { habit_streaks } from './entries/habit-streaks';
import { celebration_rewards } from './entries/celebration-rewards';
import { constructive_feedback } from './entries/constructive-feedback';
import { goal_setting_ui } from './entries/goal-setting-ui';
import { performance_tuning } from './entries/performance-tuning';
import { web_vitals } from './entries/web-vitals';
import { debounce_throttle } from './entries/debounce-throttle';
import { virtualization } from './entries/virtualization';
import { edtech_flashcards } from './entries/edtech-flashcards';
import { dark_mode_design } from './entries/dark-mode-design';
import { color_blindness } from './entries/color-blindness';
import { empty_states } from './entries/empty-states';
import { neumorphism } from './entries/neumorphism';
import { progressive_disclosure } from './entries/progressive-disclosure';
import { variable_fonts } from './entries/variable-fonts';
import { toast_notifications } from './entries/toast-notifications';
import { swipe_gestures } from './entries/swipe-gestures';
import { file_upload } from './entries/file-upload';
import { onboarding_tours } from './entries/onboarding-tours';
import { gamified_leaderboards } from './entries/gamified-leaderboards';
import { focus_management } from './entries/focus-management';
import { hicks_law } from './entries/hicks-law';
import { serial_position_effect } from './entries/serial-position-effect';
import { fitts_law } from './entries/fitts-law';
import { atomic_design } from './entries/atomic-design';
import { design_tokens } from './entries/design-tokens';
import { component_props } from './entries/component-props';
import { color_rule } from './entries/color-rule';
import { typography_scale } from './entries/typography-scale';
import { thumb_zone } from './entries/thumb-zone';
import { command_palettes } from './entries/command-palettes';
import { peak_end_rule } from './entries/peak-end-rule';
import { deceptive_patterns } from './entries/deceptive-patterns';
import { notification_fatigue } from './entries/notification-fatigue';
import { complexity_overload } from './entries/complexity-overload';
import { form_validation_ux } from './entries/form-validation-ux';
import { miller_law } from './entries/miller-law';
import { aria_live_regions } from './entries/aria-live-regions';
import { data_table_patterns } from './entries/data-table-patterns';
import { theme_operator_console } from './entries/theme-operator-console';
import { theme_quiet_luxury } from './entries/theme-quiet-luxury';
import { theme_system_atlas } from './entries/theme-system-atlas';
import { theme_technical_blueprint } from './entries/theme-technical-blueprint';
// Layout
import { spacing_systems } from './entries/spacing-systems';
import { flexbox_patterns } from './entries/flexbox-patterns';
import { css_grid_layouts } from './entries/css-grid-layouts';
import { z_index_stacking } from './entries/z-index-stacking';
import { sidebar_layouts } from './entries/sidebar-layouts';
import { content_width_containers } from './entries/content-width-containers';
// Typography
import { font_pairing } from './entries/font-pairing';
import { line_length } from './entries/line-length';
import { line_height_rhythm } from './entries/line-height-rhythm';
import { type_hierarchy } from './entries/type-hierarchy';
import { responsive_typography } from './entries/responsive-typography';
// Components
import { button_design } from './entries/button-design';
import { modal_dialog } from './entries/modal-dialog';
import { jakobs_law } from './entries/jakobs-law';
import { tabs_navigation } from './entries/tabs-navigation';
import { dropdown_select } from './entries/dropdown-select';
import { badges_tags_chips } from './entries/badges-tags-chips';
import { pagination_patterns } from './entries/pagination-patterns';
import { search_patterns } from './entries/search-patterns';
import { tooltip_popover } from './entries/tooltip-popover';
// Responsiveness
import { mobile_first_design } from './entries/mobile-first-design';
import { breakpoint_strategy } from './entries/breakpoint-strategy';
import { touch_target_sizing } from './entries/touch-target-sizing';
import { fluid_adaptive_layouts } from './entries/fluid-adaptive-layouts';
import { responsive_images } from './entries/responsive-images';
// Motion
import { page_transitions } from './entries/page-transitions';
import { easing_curves } from './entries/easing-curves';
import { staggered_animation } from './entries/staggered-animation';
import { motion_accessibility } from './entries/motion-accessibility';
// Visual Hierarchy
import { white_space } from './entries/white-space';
import { visual_weight } from './entries/visual-weight';
import { f_pattern_reading } from './entries/f-pattern-reading';
import { emphasis_techniques } from './entries/emphasis-techniques';
// Psychology
import { von_restorff_effect } from './entries/von-restorff-effect';
import { zeigarnik_effect } from './entries/zeigarnik-effect';
import { aesthetic_usability_effect } from './entries/aesthetic-usability-effect';
import { doherty_threshold } from './entries/doherty-threshold';
// Data
import { chart_selection } from './entries/chart-selection';
import { filtering_sorting_ui } from './entries/filtering-sorting-ui';
import { dashboard_layout_patterns } from './entries/dashboard-layout-patterns';
import { number_formatting } from './entries/number-formatting';
import { data_visualization_principles } from './entries/data-visualization-principles';
// Tokens
import { elevation_shadows } from './entries/elevation-shadows';
import { icon_systems } from './entries/icon-systems';
import { multi_brand_theming } from './entries/multi-brand-theming';
// Color
import { color_harmony } from './entries/color-harmony';
import { semantic_color_system } from './entries/semantic-color-system';
// Interaction additions
import { error_states } from './entries/error-states';
import { loading_states } from './entries/loading-states';
import { confirmation_patterns } from './entries/confirmation-patterns';
import { offline_sync_states } from './entries/offline-sync-states';
import { keyboard_navigation } from './entries/keyboard-navigation';
import { undo_patterns } from './entries/undo-patterns';
import { drag_drop_patterns } from './entries/drag-drop-patterns';

export const entries: ReferenceEntry[] = [
  theme_bioluminescent,
  theme_swiss_polarity,
  case_study_imprint,
  case_study_linear,
  case_study_duolingo,
  case_study_airbnb,
  glassmorphism,
  mystery_meat_navigation,
  scroll_jacking,
  gestalt_proximity,
  gestalt_common_region,
  visual_essays,
  bento_grids,
  gradient_mesh,
  optimistic_ui,
  micro_interactions,
  skeleton_screens,
  fluid_motion,
  scroll_animations,
  contextual_glossary,
  mastery_paths,
  confidence_checks,
  cognitive_chunking,
  adaptive_scaffolding,
  habit_streaks,
  celebration_rewards,
  constructive_feedback,
  goal_setting_ui,
  performance_tuning,
  web_vitals,
  debounce_throttle,
  virtualization,
  edtech_flashcards,
  dark_mode_design,
  color_blindness,
  empty_states,
  neumorphism,
  progressive_disclosure,
  variable_fonts,
  toast_notifications,
  swipe_gestures,
  file_upload,
  onboarding_tours,
  gamified_leaderboards,
  focus_management,
  hicks_law,
  serial_position_effect,
  fitts_law,
  atomic_design,
  design_tokens,
  component_props,
  color_rule,
  typography_scale,
  thumb_zone,
  command_palettes,
  peak_end_rule,
  deceptive_patterns,
  notification_fatigue,
  complexity_overload,
  form_validation_ux,
  miller_law,
  aria_live_regions,
  data_table_patterns,
  theme_operator_console,
  theme_quiet_luxury,
  theme_system_atlas,
  theme_technical_blueprint,
  // Layout
  spacing_systems,
  flexbox_patterns,
  css_grid_layouts,
  z_index_stacking,
  sidebar_layouts,
  content_width_containers,
  // Typography
  font_pairing,
  line_length,
  line_height_rhythm,
  type_hierarchy,
  responsive_typography,
  // Components
  button_design,
  modal_dialog,
  jakobs_law,
  tabs_navigation,
  dropdown_select,
  badges_tags_chips,
  pagination_patterns,
  search_patterns,
  tooltip_popover,
  // Responsiveness
  mobile_first_design,
  breakpoint_strategy,
  touch_target_sizing,
  fluid_adaptive_layouts,
  responsive_images,
  // Motion
  page_transitions,
  easing_curves,
  staggered_animation,
  motion_accessibility,
  // Visual Hierarchy
  white_space,
  visual_weight,
  f_pattern_reading,
  emphasis_techniques,
  // Psychology
  von_restorff_effect,
  zeigarnik_effect,
  aesthetic_usability_effect,
  doherty_threshold,
  // Data
  chart_selection,
  filtering_sorting_ui,
  dashboard_layout_patterns,
  number_formatting,
  data_visualization_principles,
  // Tokens
  elevation_shadows,
  icon_systems,
  multi_brand_theming,
  // Color
  color_harmony,
  semantic_color_system,
  // Interaction additions
  error_states,
  loading_states,
  confirmation_patterns,
  offline_sync_states,
  keyboard_navigation,
  undo_patterns,
  drag_drop_patterns,
];
