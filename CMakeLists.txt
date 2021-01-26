cmake_minimum_required(VERSION 3.8 FATAL_ERROR)
project(game LANGUAGES CXX)

set(sources
    ${PROJECT_SOURCE_DIR}/src/Main.cpp
    ${PROJECT_SOURCE_DIR}/resource/Resource.rc)

add_executable(game WIN32 ${sources})
target_compile_features(game PRIVATE cxx_std_20)
target_compile_options(game PRIVATE /utf-8 /W4)

set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE} /MT")
set(CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} /MTd")

# OpenSiv3D
file(TO_CMAKE_PATH $ENV{SIV3D_0_4_3} SIV3D)
target_include_directories(game PRIVATE ${SIV3D}/include ${SIV3D}/include/ThirdParty)
target_link_directories(game PRIVATE ${SIV3D}/lib/Windows)

set(siv3d_libs_debug
    debug ${SIV3D}/lib/Windows/Siv3D_d.lib
    debug ${SIV3D}/lib/Windows/boost/libboost_filesystem-vc142-mt-sgd-x64-1_72.lib
    debug ${SIV3D}/lib/Windows/freetype/freetype28MTd.lib
    debug ${SIV3D}/lib/Windows/harfbuzz/harfbuzz_d.lib
    debug ${SIV3D}/lib/Windows/jumanpp/jpp_core_d.lib
    debug ${SIV3D}/lib/Windows/jumanpp/jpp_jumandic_d.lib
    debug ${SIV3D}/lib/Windows/jumanpp/jpp_rnn_d.lib
    debug ${SIV3D}/lib/Windows/jumanpp/jpp_util_d.lib
    debug ${SIV3D}/lib/Windows/jumanpp/jumanpp_v2_d.lib
    debug ${SIV3D}/lib/Windows/libgif/libgif_d.lib
    debug ${SIV3D}/lib/Windows/libgif/libutil_d.lib
    debug ${SIV3D}/lib/Windows/libjpeg-turbo/turbojpeg-static_d.lib
    debug ${SIV3D}/lib/Windows/libogg/libogg_static_d.lib
    debug ${SIV3D}/lib/Windows/libpng/libpng16_d.lib
    debug ${SIV3D}/lib/Windows/libvorbis/libvorbis_d.lib
    debug ${SIV3D}/lib/Windows/libvorbis/libvorbisfile_d.lib
    debug ${SIV3D}/lib/Windows/libwebp/libwebp_debug.lib
    debug ${SIV3D}/lib/Windows/opencv/opencv_core401d.lib
    debug ${SIV3D}/lib/Windows/opencv/opencv_imgcodecs401d.lib
    debug ${SIV3D}/lib/Windows/opencv/opencv_imgproc401d.lib
    debug ${SIV3D}/lib/Windows/opencv/opencv_objdetect401d.lib
    debug ${SIV3D}/lib/Windows/opencv/opencv_photo401d.lib
    debug ${SIV3D}/lib/Windows/opencv/opencv_videoio401d.lib
    debug ${SIV3D}/lib/Windows/zlib/zlib_d.lib)

set(siv3d_libs_release
    optimized ${SIV3D}/lib/Windows/Siv3D.lib
    optimized ${SIV3D}/lib/Windows/boost/libboost_filesystem-vc142-mt-s-x64-1_72.lib
    optimized ${SIV3D}/lib/Windows/freetype/freetype28MT.lib
    optimized ${SIV3D}/lib/Windows/harfbuzz/harfbuzz.lib
    optimized ${SIV3D}/lib/Windows/jumanpp/jpp_core.lib
    optimized ${SIV3D}/lib/Windows/jumanpp/jpp_jumandic.lib
    optimized ${SIV3D}/lib/Windows/jumanpp/jpp_rnn.lib
    optimized ${SIV3D}/lib/Windows/jumanpp/jpp_util.lib
    optimized ${SIV3D}/lib/Windows/jumanpp/jumanpp_v2.lib
    optimized ${SIV3D}/lib/Windows/libgif/libgif.lib
    optimized ${SIV3D}/lib/Windows/libgif/libutil.lib
    optimized ${SIV3D}/lib/Windows/libjpeg-turbo/turbojpeg-static.lib
    optimized ${SIV3D}/lib/Windows/libogg/libogg_static.lib
    optimized ${SIV3D}/lib/Windows/libpng/libpng16.lib
    optimized ${SIV3D}/lib/Windows/libvorbis/libvorbis.lib
    optimized ${SIV3D}/lib/Windows/libvorbis/libvorbisfile.lib
    optimized ${SIV3D}/lib/Windows/libwebp/libwebp.lib
    optimized ${SIV3D}/lib/Windows/opencv/opencv_core401.lib
    optimized ${SIV3D}/lib/Windows/opencv/opencv_imgcodecs401.lib
    optimized ${SIV3D}/lib/Windows/opencv/opencv_imgproc401.lib
    optimized ${SIV3D}/lib/Windows/opencv/opencv_objdetect401.lib
    optimized ${SIV3D}/lib/Windows/opencv/opencv_photo401.lib
    optimized ${SIV3D}/lib/Windows/opencv/opencv_videoio401.lib
    optimized ${SIV3D}/lib/Windows/zlib/zlib.lib)

target_link_libraries(game ${siv3d_libs_debug} ${siv3d_libs_release})
