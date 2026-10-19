# Video sources and reuse terms

Checked 19 October 2026.

## Public Gesture video corpus: 90 clips

The source is **Gesture video corpus** (2021), credited to Manuela Macedonia, Katja M. Mayer, Brian Mathias and Katharina von Kriegstein. Dataset DOI: https://doi.org/10.6084/m9.figshare.c.5296396.v1. The collection description requests citation of Macedonia, Müller and Friederici (2011), https://doi.org/10.1002/hbm.21084, and Mayer et al. (2015), https://doi.org/10.1016/j.cub.2014.11.068.

All 90 public item records were retrieved through the Figshare API on 19 October 2026. Every item states **CC BY 4.0**, https://creativecommons.org/licenses/by/4.0/. Public metadata, authors and individual DOIs are saved in `source_materials/figshare_source_records.json`. `analysis/stimulus_provenance.csv` links the benchmark filenames, labels, controls and source items. The repository's MP4 copies were converted for presentation; mismatched controls reuse these clips with deliberately unrelated labels.

## JKU collection: 44 clips, internally called “object”

Pedro's original source email of 30 April 2026 supplied https://sync2.ie.jku.at/d/22cd43fec94346668fdc/ and explicitly identified its contents as original videos for **Macedonia, Müller and Friederici (2011), The impact of iconic gestures on foreign language word learning and its neural substrate**, Human Brain Mapping, 32(6), 982–998, https://doi.org/10.1002/hbm.21084 (PMID 20645312). This establishes the source attribution used in the manuscript. The benchmark manifest identifies these files as `local_object_videos`; they depict performed gestures.

On 19 October 2026, the JKU server responded but reported that the shared folder, under `Vimmi Videos_2008/EXPERIMENT_WURM/`, no longer exists. No explicit redistribution licence for this collection was recoverable from that page, the local manifests, or the source correspondence. The CC BY licence on the separate Figshare items must not be assigned to these 44 files without evidence. All 44 converted MP4 files are already downloadable from this project’s public repository under assets/rating-videos/. The file list is in source_materials/jku_public_video_paths.json. This revision supplies the attribution and source mapping; it does not add more copies of those files. These are Manuela Macedonia’s videos, supplied within the author collaboration. No separate public reuse licence is asserted for this collection.

The 2019 paper *Depth of encoding through observed gestures in foreign language word learning* contains overlapping vocabulary, but overlap alone does not establish file provenance. The direct 2011 attribution comes from the original source email.

## What the draft requested

Manuela’s draft asked for the source and provenance of the 44 clips and mistakenly described them as videos of objects. They are performed gestures. The corrected source attribution fulfills that request. The previous checklist’s separate “permission still needed” item was added during this revision; it was not a request stated in her draft.
