#version 410

layout(std140) uniform PSConstants2D
{
	vec4 g_colorAdd;
	vec4 g_sdfParam;
	vec4 g_internal;	
};

//
// PSInput
//
layout(location = 0) in vec4 Color;
layout(location = 1) in vec2 UV;

//
// PSOutput
//
layout(location = 0) out vec4 FragColor;
	
void main()
{
	float tr = UV.y;
	float d = abs(mod(UV.x, 3.0) - 1.0);
	float range = 1.0 - tr;
	vec4 color = Color;
	color.a *= (d < range) ? 1.0 : (d < 1.0) ? ((1.0 - d) / tr) : 0.0;
	
	FragColor = color + g_colorAdd;
}
