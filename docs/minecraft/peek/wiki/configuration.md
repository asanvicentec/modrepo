---
titleTemplate: Peek
aside: false
---

# Configuration

`config/peek/peek.properties`

| Config key                                | Description                                                                                                                                                                                                                                                                                                                  | Default value |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `show_empty_containers`                   | If empty containers should show the item slots in the tooltip                                                                                                                                                                                                                                                                | `false`       |
| `peek_shulker_boxes`                      | Displays the items inside shulker boxes                                                                                                                                                                                                                                                                                      | `true`        |
| `peek_chests`                             | Displays the items inside pick-blocked chests and trapped chests                                                                                                                                                                                                                                                             | `true`        |
| `peek_barrels`                            | Displays the items inside pick-blocked barrels                                                                                                                                                                                                                                                                               | `true`        |
| `peek_dispensers`                         | Displays the items inside pick-blocked dispensers and droppers                                                                                                                                                                                                                                                               | `true`        |
| `peek_hoppers`                            | Displays the items inside pick-blocked hoppers                                                                                                                                                                                                                                                                               | `true`        |
| `peek_beehives`                           | Displays the amount of bees and the honey level                                                                                                                                                                                                                                                                              | `true`        |
| `peek_exploration_maps`                   | Displays the marker coordinates of exploration maps                                                                                                                                                                                                                                                                          | `true`        |
| `peek_compasses`                          | Displays the destinations of compasses                                                                                                                                                                                                                                                                                       | `true`        |
| `peek_recovery_compasses`                 | Displays your death location on recovery compasses                                                                                                                                                                                                                                                                           | `true`        |
| `peek_suspicious_stews`                   | Displays the effect of suspicious stews                                                                                                                                                                                                                                                                                      | `true`        |
| `show_shulker_box_item_hint`              | If this is enabled, the mod will show additional information about the items in shulker boxes when in item form                                                                                                                                                                                                              | `true`        |
| `show_shulker_box_block_hint`             | If this is enabled, the mod will show additional information about the shulker box block on the lid of the shulker box                                                                                                                                                                                                       | `true`        |
| `use_shulker_box_data_strings`            | If this is enabled, the mod will use the data strings to determine what to show on the shulker box lid<br/>*Note that this setting is experimental and subject to change*                                                                                                                                                    | `false`       |
| `use_shulker_box_item_names`              | If this is enabled, the mod will use item names to determine what to show on the shulker box lid<br/>*Note that this setting is experimental and subject to change*                                                                                                                                                          | `false`       |
| `hide_shulker_box_data_strings`           | If this is enabled, the mod will hide the data strings on tooltips and GUIs                                                                                                                                                                                                                                                  | `true`        |
| `shulker_box_item_hint_custom_model_data` | The custom model data ID of shulker box item hint items                                                                                                                                                                                                                                                                      | `1702`        |
| `send_shulker_box_data_to_client`         | If this is enabled, the mod will send the contents of placed down shulker boxes to the client<br/>This allows the mod to display hints on shulker boxes that are placed down without needing to open them first<br/>If you want to use this feature on a server, the server needs the mod installed and this setting enabled | `true`        |