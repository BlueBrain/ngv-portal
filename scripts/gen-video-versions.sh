#!/bin/bash


SOURCE_VIDEO_PATH=$(realpath $1)
OUTPUT_PATH=$(realpath ${2:-./})

SOURCE_VIDEO_FILENAME=$(basename $SOURCE_VIDEO_PATH)

echo "Source location: $SOURCE_VIDEO_PATH"
echo "Output path: $OUTPUT_PATH"
echo

while true; do
    read -p "Do you wish to continue? (Yes/No) " yn
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

FILENAME_BASE="${SOURCE_VIDEO_FILENAME%.*}"

echo "Encoding 1080p H264"

ffmpeg \
  -i $SOURCE_VIDEO_PATH \
  -map_metadata -1 \
  -an \
  -c:v libx264 \
  -crf 24 \
  -preset veryslow \
  -profile:v high \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -vf scale=1920:-2 \
  $OUTPUT_PATH/$FILENAME_BASE.1080p.h264.mp4

echo "Encoding 720p H264"

ffmpeg \
  -i $SOURCE_VIDEO_PATH \
  -map_metadata -1 \
  -an \
  -c:v libx264 \
  -crf 24 \
  -preset veryslow \
  -profile:v high \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -vf scale=1280:-2 \
  $OUTPUT_PATH/$FILENAME_BASE.720p.h264.mp4

echo "Encoding 480p H264"

ffmpeg \
  -i $SOURCE_VIDEO_PATH \
  -map_metadata -1 \
  -an \
  -c:v libx264 \
  -crf 24 \
  -preset veryslow \
  -profile:v high \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -vf scale=854:-2 \
  $OUTPUT_PATH/$FILENAME_BASE.480p.h264.mp4

echo "Encoding 360p H264"

ffmpeg \
  -i $SOURCE_VIDEO_PATH \
  -map_metadata -1 \
  -an \
  -c:v libx264 \
  -crf 24 \
  -preset veryslow \
  -profile:v high \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -vf scale=640:-2 \
  $OUTPUT_PATH/$FILENAME_BASE.360p.h264.mp4

echo "Encoding 1080p HEVC"

ffmpeg \
  -i $SOURCE_VIDEO_PATH \
  -map_metadata -1 \
  -an -c:v \
  libx265 \
  -crf 29 \
  -preset veryslow \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -tag:v hvc1 \
  -vf scale=1920:-2 \
  $OUTPUT_PATH/$FILENAME_BASE.1080p.hevc.mp4

echo "Encoding 720p HEVC"

ffmpeg \
  -i $SOURCE_VIDEO_PATH \
  -map_metadata -1 \
  -an -c:v \
  libx265 \
  -crf 29 \
  -preset veryslow \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -tag:v hvc1 \
  -vf scale=1280:-2 \
  $OUTPUT_PATH/$FILENAME_BASE.720p.hevc.mp4

echo "Encoding 480p HEVC"

ffmpeg \
  -i $SOURCE_VIDEO_PATH \
  -map_metadata -1 \
  -an -c:v \
  libx265 \
  -crf 29 \
  -preset veryslow \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -tag:v hvc1 \
  -vf scale=854:-2 \
  $OUTPUT_PATH/$FILENAME_BASE.480p.hevc.mp4

echo "Encoding 360p HEVC"

ffmpeg \
  -i $SOURCE_VIDEO_PATH \
  -map_metadata -1 \
  -an -c:v \
  libx265 \
  -crf 29 \
  -preset veryslow \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -tag:v hvc1 \
  -vf scale=640:-2 \
  $OUTPUT_PATH/$FILENAME_BASE.360p.hevc.mp4

echo
echo Done
